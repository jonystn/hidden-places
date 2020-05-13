import React from "react";
import { Link } from "react-router-dom";
import "./ExploreMapView.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const search = <FontAwesomeIcon icon={faSearch} style={{ color: "#9eb85d" }} />;

function ExploreMapView(props) {
  return (
    <div className="ExploreMapView">
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
    </div>
  );
}

export default ExploreMapView;
