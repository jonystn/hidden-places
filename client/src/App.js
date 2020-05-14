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
import ProtectedRoute from "./components/ProtectedRoute";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <StartPage user={this.state.user} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login setUser={this.setUser} user={this.state.user} {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup setUser={this.setUser} user={this.state.user} {...props} />
          )}
        />
        <>
          <Route exact path="/explore-map-view" component={ExploreMapView} />
          {/* <Route exact path='/place-info' component={PlaceInfo} /> */}
          <Route exact path="/spot-a-place" component={SpotAPlace} />
          <Route exact path="/favorites" component={Favorites} />

          <Route
            exact
            path="/profile"
            render={(props) => (
              <Profile
                setUser={this.setUser}
                user={this.state.user}
                {...props}
              />
            )}
          />

          <ProtectedRoute
            exact
            path="/explore"
            user={this.state.user}
            component={Explore}
          />
          <ProtectedRoute user={this.state.user} component={Navbar} />
          {/* <Navbar /> */}
        </>
      </Switch>
    );
  }
}

export default App;
