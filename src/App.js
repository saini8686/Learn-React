import React, { useRef } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import LottieAnimation from "./components/LottieAnimation";
import LocomotiveAnimation from "./components/LocomotiveAnimation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Roadmap from "./components/Roadmap";
import NotFound from "./NotFound";
import ChangeColorBoxOnType from "./components/ChangeColorBoxOnType";
import TypeWriterAnimation from "./components/TypeWriterAnimation";

function App() {
  const containerRef = useRef(null);
  AOS.init({
    once: true,
  });
  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: { smooth: true },
          phone: { smooth: true },
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <div className="App" data-scroll-container ref={containerRef}>
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
              <Route exact path="/lottie" component={LottieAnimation} />
              <Route exact path="/locomotive" component={LocomotiveAnimation} />
              <Route exact path="/roadmap" component={Roadmap} />

              <Route
                exact
                path="/changecolor"
                component={ChangeColorBoxOnType}
              />
              <Route exact path="/typewriter" component={TypeWriterAnimation} />
              <Route exact path="" component={NotFound} />
            </Switch>
          </Router>
        </div>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
