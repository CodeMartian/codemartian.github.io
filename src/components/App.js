import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <div className="wrapper">
      <SideBar/>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
