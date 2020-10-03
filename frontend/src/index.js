import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GalleryPage from "./pages/GalleryPage";
import CreateObjectPage from "./pages/CreateObjectPage";
import DetailPage from "./pages/DetailPage";

import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route
          exact
          path="/gallery"
          render={(props) => <GalleryPage {...props} />}
        />
        <Route
          exact
          path="/create"
          render={(props) => <CreateObjectPage {...props} />}
        />
        <Route
          exact
          path="/detail"
          render={(props) => <DetailPage {...props} />}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
