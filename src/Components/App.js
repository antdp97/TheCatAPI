import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './HomePage';
import Favorites from './Favorites';
import Breeds from './Breeds';

function App() {

  {/* <div className="App-container" style={{height:"100%"}}>
      <header className="App-header text-center">
        <h1 className="">Cats are cuteeee</h1>
      </header>
      <PetList />
    </div> */}
  return (  
  <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <a className="nav-brand" href="#">
          <img src="https://api.thecatapi.com/favicon.ico" alt="TheCatApi" />TheCatApi
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/breed">Breeds</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/breed">
            <Breeds />
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
