import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Explore.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMapGl, { Marker, GeolocateControl } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import axios from "axios";

const search = <FontAwesomeIcon icon={faSearch} style={{ color: "#00C4CC" }} />;

export default function Explore(props) {

  const [viewport, setViewport] = useState({});

  const onSelected = (viewport) => {
    // console.log(viewport);
    setViewport(viewport);
  };

  const handleFocus = (event) => event.target.select();
  const MyInput = (props) => (
    <div {...props} style={{ position: "relative", with: "100%" }}>
      <i style={{ position: "absolute", top: "16px", left: "10px" }}>
        {search}
      </i>
      <input
        {...props}
        placeholder="Explore places"
        autoFocus="autofocus"
        onFocus={handleFocus}
        value={undefined}
      />
    </div>
  );
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((res) => {

      setViewport({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
        width: "100%",

        height: "55%",
        zoom: 10,
      });
    });

    axios
      .get("/spotaphoto/places")
      .then((response) => {
        // console.log(response.data);
        setPlaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    autoplay: true,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "slides",
    autoplaySpeed: "100",
  };
  return (
    <div className="Explore">
      <Slider {...settings}>
        {places.length
          ? places.slice(1).map((photo, i) => {
              return (
                <div key={photo._id}>
                  <div className="DescriptionPhoto">
                    <span>{photo.name}</span> <br />
                    <span>
                      {photo.country} - {photo.city}
                    </span>
                  </div>
                  <img src={photo.imgPath} width="100%" alt="" />
                </div>
              );
            })
          : null}
        <div>
          <div>
            <div className="DescriptionPhoto">
              <span>A French railway station</span> <br />
              <span>Germany - Berlin</span>
            </div>
            <img
              src="http://res.cloudinary.com/dcminvnrd/image/upload/v1589581947/hidden-places/gare-francaise-french-railway-station-tegel-berlin.jpg.jpg"
              alt=""
            />
          </div>
        </div>
      </Slider>
      <h1>
        Hello &nbsp;
        {props.user.username.charAt(0).toUpperCase() +
          props.user.username.slice(1)}
      </h1>


      {/* <div className="Form">
        <i>{search}</i>
      </div> */}

      <ReactMapGl
        className="Map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jonystn/ckaedf2980f0g1ip7h8bdn246"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {places.length
          ? places.map((place) => (
              <Marker
                key={place._id}
                latitude={place.latitude}
                longitude={place.longitude}
              >
                <Link to={`/place-info/${place._id}`}>
                  <img className="Marker" src={place.imgPath} alt="" />
                </Link>
              </Marker>
            ))
          : null}

        <div className="ContainerSearch">
          <Geocoder
            className="InputContainer"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onSelected={onSelected}
            viewport={viewport}
            inputComponent={MyInput}
            hideOnSelect={true}
            limit={4}
            pointZoom={25}
          />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </div>
      </ReactMapGl>
      
    </div>
  );
}
