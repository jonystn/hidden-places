import React, { useState, useEffect } from "react";
import "./Favorites.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const trash = <FontAwesomeIcon icon={faTrash} style={{ color: "#9eb85d" }} />;
const star = <FontAwesomeIcon icon={faStar} style={{ color: "#F3B249" }} />;

function Favorites(props) {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    console.log(props.user);
    axios
      .get(`/user/favorites/${props.user._id}`)
      .then((response) => {
        console.log(response.data, "USER");
        setFavorites(response.data.favorites);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Favorites">
      {favorites &&
        favorites.map((fav, i) => {
          return (
            <div className="FavItem">
              <div className="Container">
                <img className="Photo" src={fav.imgPath} alt="" />
                <span className="MediumTextBold">{fav.name}</span>
                <div className="ContainerRating">
                  <div className="Rating">
                    <i>{star}</i>
                    <i>{star}</i>
                    <i>{star}</i>
                    <i>{star}</i>
                    <i>{star}</i>
                  </div>
                  <i className="DeleteFavorite">{trash}</i>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Favorites;
