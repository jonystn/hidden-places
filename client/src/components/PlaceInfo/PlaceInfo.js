import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlaceInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

const heart = <FontAwesomeIcon icon={faHeart} />;
const star = <FontAwesomeIcon icon={faStar} style={{ color: "#F3B249" }} />;

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

export default function PlaceInfo(props) {
  const [viewport, setViewport] = useState({
    latitude: 52.5196,
    longitude: 13.4069,
    width: "100%",
    height: "37%",
    zoom: 10,
  });

  return (
    <div className="PlaceInfo">
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
          <Marker
            key={place._id}
            latitude={place.latitude}
            longitude={place.longitude}
          >
            <Link>
              <img className="Marker" src={place.img} alt="" />
            </Link>
          </Marker>
        ))}
      </ReactMapGl>
      <div className="PlaceInfoTab">
        <span className="MediumTextBold">
          Chinese teahouse (Gärten der Welt)
        </span>

        <div>
          <div className="Rating">
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
          </div>
          <i className="FavoriteActive">{heart}</i>
        </div>

        <p className="MediumText">
          Designed by experts in Beijing, then built from materials shipped all
          the way from China, is authentic down to the tiniest detail.
        </p>
        <img
          className="Photo"
          src="http://www.secretcitytravel.com/berlin-september-2014/images/chinese-teahouse-berlin-marzahn.jpg"
          alt={placePhotos.name}
        />
      </div>
    </div>
  );
}
