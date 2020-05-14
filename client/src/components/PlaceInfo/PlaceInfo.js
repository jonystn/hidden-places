import React from "react";
import { Link } from "react-router-dom";
import "./PlaceInfo.scss";

import axios from "axios";

const placeInfo = (props) => {
  return axios
    .post("/api/auth/signup", { username, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
