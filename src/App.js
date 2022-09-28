import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StarRating from "./components/StarRating";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/common/Header";
import SignUpFrom from "./components/SignUpFrom";
import SignUp from "./components/SignUp";
import LoginFromSecond from "./components/LoginFromSecond";
import AOS from "aos";
import "aos/dist/aos.css";
import LottieAnimation from "./components/LottieAnimation";
import LocomotiveAnimation from "./components/LocomotiveAnimation";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Roadmap from "./components/Roadmap";
import NotFound from "./NotFound";
import ChangeColorBox from "./components/ChangeColorBox";
import WhatsApp from "./components/WhatsApp";
import PreLoader from "./components/common/PreLoader";

function App() {
  const containerRef = useRef(null);
  const localvalue = localStorage.getItem("show");
  const PrivateRoute = () => {
    const localvalue = localStorage.getItem("show");
    if (localvalue) {
      return (
        <Route exact={true} path={props.path} component={props.component} />
      );
    } else {
      <SignUp />;
    }
  };
  AOS.init({
    once: true,
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
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
                <Header />
                <Switch>
                  <PrivateRoute exact path="/home">
                    <Home />
                  </PrivateRoute>
                  <Route exact={true} path="/">
                    <SignUp />
                  </Route>
                  <PrivateRoute exact path="/star" component={StarRating} />
                  <PrivateRoute exact path="/signup" component={SignUpFrom} />
                  <PrivateRoute
                    exact
                    path="/loginsecond"
                    component={LoginFromSecond}
                  />
                  <PrivateRoute
                    exact
                    path="/lottie"
                    component={LottieAnimation}
                  />
                  <PrivateRoute
                    exact
                    path="/locomotive"
                    component={LocomotiveAnimation}
                  />
                  <PrivateRoute exact path="/roadmap" component={Roadmap} />
                  <PrivateRoute exact path="/whatsapp" component={WhatsApp} />

                  <PrivateRoute
                    exact
                    path="/changecolor"
                    component={ChangeColorBox}
                  />

                  <Route exact path="" component={NotFound} />
                </Switch>
              </Router>
            </div>
          </LocomotiveScrollProvider>
        </>
      )}
    </>
  );
}

export default App;
