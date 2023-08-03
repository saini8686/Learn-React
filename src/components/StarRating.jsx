import React, { useState, useEffect } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Rating } from "react-simple-star-rating";
import { withRouter } from "react-router-dom";

const StarRating = ({ history }) => {
  const [isOnce, setOnce] = useState(false);
  const [value, setValue] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setOnce(true);
    }
  }, [inView]);

  const [rating2, setRating2] = useState(0); // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    setRating2(rate);
    // other logic
  };
  const localvalue = localStorage.getItem("show");

  useEffect(() => {
    if (localvalue === "false" || localvalue === null) {
      console.log(localvalue, "sjdfkals");
      history.push("/");
    }
  }, [localvalue]);
  return (
    <>
      <div className="mt-4">
        <Rating
          onClick={handleRating}
          ratingValue={rating2}
          allowHover={false}
        />
      </div>
      <div className="position-relative">
        <div
          ref={ref}
          className="position-sticky top-50 translate-middle-x translate-middle-y"
        >
          {inView ? (
            <>
              <span
                className={` text-white ${
                  inView ? "border-2 border-white border-bottom " : ""
                }`}
              >
                keshav saini
              </span>
            </>
          ) : (
            <>
              <span
                className={` text-white ${
                  inView ? "" : "border-2 border-danger border-bottom"
                }`}
              >
                keshav
              </span>
            </>
          )}
        </div>

        <MouseParallaxContainer
          className="parallax d-inline-block position-absolute top-0 mt-5 pt-5"
          resetOnLeave
        >
          <MouseParallaxChild factorX={0.02} factorY={0.2}>
            <div
              className={`${
                value ? "gsap_animation_box_active" : "gsap_animation_box"
              } position-relative `}
              onMouseUp={() => setValue(false)}
              onMouseLeave={() => setValue(false)}
              onMouseDown={() => setValue(true)}
            >
              <div className="position-absolute"></div>
              <div className="position-absolute"></div>
              <div className="position-absolute"></div>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
        <div className="container">
          <div className="row justify-content-end">
            <div
              className="col-6"
              data-aos="fade-left"
              data-aos-duration="300"
              data-aos-easing="ease-in-back"
            >
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                quam earum eos doloremque corporis, qui cumque aliquid. Tempore
                repellat repellendus soluta tempora, atque aliquam ullam
                maiores, quaerat perferendis labore option.
              </p>
            </div>
          </div>
        </div>
        <div ref={ref} className="animate_slider mb-5 overflow-hidden ">
          {isOnce ? (
            <>
              <p className="text-white">keshav saini</p>
            </>
          ) : (
            <>
              <p className="text-white">keshav </p>
            </>
          )}
          <ul
            className={`text-warning main_box p-xl-0 ${
              isOnce || inView ? "animate__animated animate__bounceInRight" : ""
            }`}
          >
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
            <li className="d-flex flex-column align-items-center justify-content-center slider_box mx-3">
              An animated element
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default withRouter(StarRating);
