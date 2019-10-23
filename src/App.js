import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Components/homepage/HomePage";
import Favorites from "./Components/favourites/Favorites";
import Breeds from "./Components/breeds/Breeds";
import PageNotFound from "./PageNotFound";

import NavBar from "./Components/common/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/breed" component={Breeds} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
