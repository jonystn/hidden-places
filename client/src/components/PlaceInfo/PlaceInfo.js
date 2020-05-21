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
import Rating from "react-rating";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const heart = <FontAwesomeIcon icon={faHeart} />;
const star = <FontAwesomeIcon icon={faStar} />;
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

  const [rating, setRating] = useState(0);
  const handleRating = (value) => {
    const newRating = (rating + value) / 2;
    axios
      .patch(`/spotaphoto/rating/${props.match.params.id}`, {
        rating: newRating,
      })
      .then((res) => setRating(res.data.rating));

    // console.log(value);
  };

  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => {
    const newFavorite = !favorite;
    //console.log(favorite, newFavorite);
    axios
      .put(`/user/favorites/${props.match.params.id}`)
      .then((response) => {
        //console.log(response.data, "USER");
        props.setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFavorite(newFavorite);
  };

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const placeId = props.match.params.id;
    console.log(props.user.favorites);
    console.log(props.match.params.id);
    let findFavorite = props.user.favorites.find((favorite) => {
      console.log(favorite);
      return (
        favorite._id === props.match.params.id ||
        favorite === props.match.params.id
      );
    });
    let isFavorite = !!findFavorite;
    console.log(isFavorite);
    console.log(findFavorite);
    setFavorite(isFavorite);
    axios
      .get(`/place-info/${placeId}`)
      .then((response) => {
        setPlaces(response.data);
        setRating(response.data.rating);
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
  }, [props.match.params.id]);

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
          <div>
            <Rating
              emptySymbol={<i className="Rating">{star}</i>}
              fullSymbol={<i className="RatingActive">{star}</i>}
              initialRating={rating}
              onClick={(value) => handleRating(value)}
            />
            <span className="NumRating">{rating}</span>
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
