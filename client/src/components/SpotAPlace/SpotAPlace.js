import * as React from "react";
import { Component } from "react";
import { Redirect } from 'react-router-dom';
import { render } from "react-dom";
import MapGL, { Marker } from "react-map-gl";
import "./SpotAPlace.scss";
import Pin from "./Pin";
import FileInput from "./FileInput";
import axios from "axios";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 52.5196,
        longitude: 13.4069,
        width: "100%",
        height: "37%",
        zoom: 15,
      },
      marker: {
        latitude: 52.5196,
        longitude: 13.4069,
      },
      events: {},
      comment: "max 180 characters", 
      name: "Place Name",
      file: "",
    };
  }

    handleChange = event =>{
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    }

    handleFile = file => {
      console.log("FILE", file);
      this.setState({
        file: file,
      });
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log("HERE", this.state.file)
      axios.post("/spotaphoto/places", {
        comment: this.state.comment,
        name: this.state.name,
        latitude: this.state.marker.latitude,
        longitude: this.state.marker.longitude,
        file: this.state.file,
      })
      .then ((res)=>{
        console.log(res.data);
        this.props.history.push(`/place-info/${res.data._id}`)
        //<Redirect to={`/place-info/${res.data._id}`} />
        this.setState({
          name: " ",
          comment: " ",
          file: " ",

        });
      }) 
      
    }


  _updateViewport = (viewport) => {
    this.setState({ viewport });
  };

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat,
      },
    });
  }

  _onMarkerDragStart = (event) => {
    this._logDragEvent("onDragStart", event);
  };

  _onMarkerDrag = (event) => {
    this._logDragEvent("onDrag", event);
  };

  _onMarkerDragEnd = (event) => {
    this._logDragEvent("onDragEnd", event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1],
      },
    });
  };

  render() {
    const { viewport, marker } = this.state;

    return (
      <div className="SpotAPlace">
        <MapGL
          {...viewport}
          width="100%"
          height="40%"
          mapStyle="mapbox://styles/jonystn/cka9m0am71i0t1iqf0as2j6on"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <span className="DragAndDrop MediumTextBold">
            Drag and drop the pin to spot a hidden place
          </span>
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            offsetTop={-20}
            offsetLeft={-10}
            draggable
            onDragStart={this._onMarkerDragStart}
            onDrag={this._onMarkerDrag}
            onDragEnd={this._onMarkerDragEnd}
          >
            <Pin size={20} />
          </Marker>
        </MapGL>
        <form className="Form" onSubmit={this.handleSubmit} enctype="multipart/form-data" >
          <div className="InputContainer">
            <label htmlFor="name"></label>
            <input placeholder="Place name" 
            type="text"
            name="name"
            id = "name"
            value ={this.state.name}
            onChange = {this.handleChange}
            required />
          </div>
          <textarea
            className="TextBox"
            type= "text"
            name = "comment"
            id = "comment"
            value={this.state.comment}
            maxLength = "180"
            onChange={this.handleChange}
          />
          <FileInput handleFile={this.handleFile} />
          <button type="submit" className="PrimaryButton">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export function renderToDom(container) {
  render(<App />, container);
}
