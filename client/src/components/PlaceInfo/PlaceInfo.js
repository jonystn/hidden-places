import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./PlaceInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import ReactMapGl, { Marker } from "react-map-gl";
import axios from "axios";

const heart = <FontAwesomeIcon icon={faHeart} />;
const star = <FontAwesomeIcon icon={faStar} style={{ color: "#ffad14" }} />;
const arrow = (
  <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#00C4CC" }} />
);

export default function PlaceInfo(props) {
  const history = useHistory();

  const [viewport, setViewport] = useState({
    // latitude: 52.5196,
    // longitude: 13.4069,
    // width: "100%",
    // height: "37%",
    // zoom: 10,
  });

  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    //console.log(props.match.params.id);
    const newFavorite = !favorite;
    axios
      .put(`/user/favorites/${props.match.params.id}`)
      .then((response) => {
        console.log(response.data, "USER");
        setFavorite(newFavorite);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const placeId = props.match.params.id;
    let findFavorite = props.user.favorites.find((favorite) => {
      return favorite === props.match.params.id;
    });
    let isFavorite = !!findFavorite;
    setFavorite(isFavorite);
    axios
      .get(`/place-info/${placeId}`)
      .then((response) => {
        // console.log(response.data);
        setPlaces(response.data);
        setViewport({
          latitude: response.data.latitude,
          longitude: response.data.longitude,
          width: "100%",
          height: "37%",
          zoom: 12,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (places.length < 1) return <div />;
  return (
    <div className="PlaceInfo">
      <ReactMapGl
        className="Map"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/jonystn/ckaedf2980f0g1ip7h8bdn246"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Link onClick={() => history.goBack()}>
          <div className="BackBtn">{arrow}</div>
        </Link>
        <Marker latitude={places.latitude} longitude={places.longitude}>
          <img className="Marker" src={places.imgPath} alt="" />
        </Marker>
      </ReactMapGl>

      <div className="PlaceInfoTab">
        <span className="MediumTextBold">{places.name}</span>

        <div>
          <div className="Rating">
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
            <i>{star}</i>
          </div>
          <button type="button" onClick={handleFavorite}>
            <i className={favorite ? "FavoriteActive" : "Favorite"}>{heart}</i>
          </button>
        </div>

        <p className="MediumText">{places.comment}</p>
        <img className="Photo" src={places.imgPath} alt="" />
      </div>
    </div>
  );
}
