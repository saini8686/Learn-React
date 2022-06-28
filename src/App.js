import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StarRating from "./components/StarRating";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Headers from "./components/Headers";
import LoginFrom from "./components/LoginFrom";
import SignUpFrom from "./components/SignUpFrom";
import PoliceLight from "./components/PoliceLight";
import LoginFromSecond from "./components/LoginFromSecond";
function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/star" component={StarRating} />
          <Route exact path="/login" component={LoginFrom} />
          <Route exact path="/signup" component={SignUpFrom} />
          <Route exact path="/loginsecond" component={LoginFromSecond} />
          <Route exact path="/light" component={PoliceLight} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
