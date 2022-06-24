import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StarRating from "./components/StarRating";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Headers from "./components/Headers";
import LoginFrom from "./components/LoginFrom";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
