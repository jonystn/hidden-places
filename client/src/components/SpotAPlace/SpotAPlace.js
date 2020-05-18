import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";
import MapGL, { Marker } from "react-map-gl";
import "./SpotAPlace.scss";
import Pin from "./Pin";
import FileInput from "./FileInput";

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

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
    };
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
        <form className="Form" action="">
          <div className="InputContainer">
            <label htmlFor="name"></label>
            <input placeholder="Place name" type="name" name="name" required />
          </div>
          <textarea
            className="TextBox"
            value="{this.state.value}"
            onChange="{this.handleChange}"
          />
          <FileInput />
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
