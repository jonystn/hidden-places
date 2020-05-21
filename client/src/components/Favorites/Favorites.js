import React, { useState, useEffect } from "react";
import "./Favorites.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Rating from "react-rating";

const trash = <FontAwesomeIcon icon={faTrash} style={{ color: "#00C4CC" }} />;
const star = <FontAwesomeIcon icon={faStar} />;

function Favorites(props) {
  const [favorites, setFavorites] = useState([]);
  const handleDelete = (id) => {
    //console.log(props.match.params.id);
    axios
      .put(`/user/favorites/${id}`)
      .then((response) => {
        // console.log(response.data, "USER");
        setFavorites(response.data.favorites);
        props.setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // console.log(props.user);
    axios
      .get(`/user/favorites/${props.user._id}`)
      .then((response) => {
        // console.log(response.data, "USER");
        setFavorites(response.data.favorites);
        props.setUser(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Favorites">
      {favorites.length === 0 && (
        <div className="NoFav">
          <span>Oh, it looks you don't have favorites yet.</span>
        </div>
      )}

      {favorites &&
        favorites.map((fav, i) => {
          return (
            <div key={fav._id} className="FavItem">
              <div className="Container">
                <Link to={`/place-info/${fav._id}`}>
                  <img className="Photo" src={fav.imgPath} alt="" />
                </Link>
                <Link to={`/place-info/${fav._id}`}>
                  <span className="MediumTextBold">{fav.name}</span>
                </Link>
                <div className="ContainerRating">
                  <div>
                    <Rating
                      emptySymbol={<i className="Rating">{star}</i>}
                      fullSymbol={<i className="RatingActive">{star}</i>}
                      initialRating={fav.rating}
                      readonly
                    />{" "}
                    <span className="NumRating">{fav.rating}</span>
                  </div>
                  <button type="button" onClick={() => handleDelete(fav._id)}>
                    <i className="DeleteFavorite">{trash}</i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Favorites;
