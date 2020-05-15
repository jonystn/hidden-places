import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Explore.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMapGl from "react-map-gl";

const search = <FontAwesomeIcon icon={faSearch} style={{ color: "#9eb85d" }} />;

const placePhotos = [
  {
    name: "Chinese teahouse (Gärten der Welt)",
    location: {
      country: "Germany",
      city: "Berlin",
      address: "Eisenacher Strasse 99, 12685",
    },
    _id: "dsfads1",
    latitude: 52.53973,
    longitude: 13.579218,

    comment: "",
    img:
      "http://www.secretcitytravel.com/berlin-september-2014/images/chinese-teahouse-berlin-marzahn.jpg",
  },
  {
    name: "A French railway station",
    location: {
      country: "Germany",
      city: "Berlin",
      address: "Buddestraße 2-4, 13507",
    },
    _id: "dsfads2",
    latitude: 52.588821,
    longitude: 13.288896,

    comment: "",
    img:
      "http://www.secretcitytravel.com/berlin-june-2015/images/gare-francaise-french-railway-station-tegel-berlin.jpg",
  },
  {
    name: "Beautiful hidden courtyard",
    location: {
      country: "Germany",
      city: "Berlin",
      address: "Lindenstraße 20-25, 10969",
    },
    _id: "dsfads3",
    latitude: 52.503837,
    longitude: 13.397246,

    comment: "",
    img:
      "http://www.secretcitytravel.com/berlin-may-2014/images/kreuzberg-hidden-courtyard.jpg",
  },
  {
    name: "A hobbit house in Dahlem village",
    location: {
      country: "Germany",
      city: "Berlin",
      address: "Domäne Dahlem farm, 49, 14195",
    },
    _id: "dsfads4",
    latitude: 52.458526,
    longitude: 13.289297,

    comment: "",
    img:
      "http://www.secretcitytravel.com/berlin-november-2014/images/eiskeller-dahlem-berlin.jpg",
  },
];

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

//getting the position
function success(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  console.log(latitude, longitude);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);
//-------

export default function Explore(props) {
  const [viewport, setViewport] = useState({
    latitude: 52.5196,
    longitude: 13.4069,
    width: "100%",
    height: "37%",
    zoom: 10,
  });

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
        {placePhotos.map((photo, i) => {
          return (
            <div key={photo._id}>
              <div className="DescriptionPhoto">
                <span>{photo.name}</span> <br />
                <span>
                  {photo.location.address} - {photo.location.city}
                </span>
              </div>
              <img src={photo.img} width="100%" alt="" />
            </div>
          );
        })}
      </Slider>
      <h1>
        Hello &nbsp;
        {props.user.username.charAt(0).toUpperCase() +
          props.user.username.slice(1)}
      </h1>
      <form className="Form" onSubmit="">
        <div className="InputContainer">
          <i>{search}</i>
          <label htmlFor="name"></label>
          <input
            placeholder="Discover places"
            type="text"
            name="search"
            // value={this.state.name}
            // onChange={this.handleChange}
            id="search"
          />
        </div>
      </form>
      <ReactMapGl
        className="Map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jonystn/cka7g9pic00da1iqowalt6qgy"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {placePhotos.map((place) => (
          <marker
            key={place._id}
            latitude={place.latitude}
            longitude={place.longitude}
          >
            <Link>
              <img className="Marker" src={place.img} alt="" />
            </Link>
            console.log(place.latitude)
          </marker>
        ))}
      </ReactMapGl>
    </div>
  );
}
