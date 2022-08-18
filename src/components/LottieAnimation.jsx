import React from "react";
import Lottie from "react-lottie";
import animationData from "./json/cigarette-man.json";
import animationData2 from "./json/sweat-grinning-emoji-animation.json";
import animationData3 from "./json/hello.json";
import animationData4 from "./json/psychology-spiral.json";

const LottieAnimation = () => {
  const defaultOptional = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsthird = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsfour = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Lottie
              options={defaultOptionsthird}
              width="100%"
              isClickToPauseDisabled={true}
            />
          </div>
          <div className="col-3">
            <Lottie
              options={defaultOptional}
              width="100%"
              isClickToPauseDisabled={true}
            />
          </div>
          <div className="col-3">
            <Lottie
              options={defaultOptions}
              width="100%"
              isClickToPauseDisabled={true}
            />
          </div>
          <div className="col-3">
            <Lottie
              options={defaultOptionsfour}
              width="100%"
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LottieAnimation;