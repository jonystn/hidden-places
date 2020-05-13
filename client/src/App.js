import React from "react";
import "./App.scss";
import "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import StartPage from "./components/StartPage/StartPage";
import Explore from "./components/Explore/Explore";
import ExploreMapView from "./components/ExploreMapView/ExploreMapView";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import PlaceInfo from "./components/PlaceInfo/PlaceInfo";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import SpotAPlace from "./components/SpotAPlace/SpotAPlace";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <>
        <Route exact path="/explore-map-view" component={ExploreMapView} />
        {/* <Route exact path='/place-info' component={PlaceInfo} /> */}
        <Route exact path="/spot-a-place" component={SpotAPlace} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/explore" component={Explore} />
        <Navbar />
      </>
    </Switch>
  );
}

export default App;
