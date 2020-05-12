import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import StartPage from "./components/StartPage/StartPage";

function App() {
  return (
    <Switch>
      {/* <Route ersxact path='/' component={StartPage} /> */}
      <>
        <Navbar />
      </>
    </Switch>
  );
}

export default App;
