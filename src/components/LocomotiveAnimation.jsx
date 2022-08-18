import React, { useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const LocomotiveAnimation = () => {
  return (
    <>
      <section className="section py-4" data-scroll-section>
        <h2 data-scroll data-scroll-speed="4" data-scroll-position="top">
          LET'S SCROLLING
        </h2>
        <p
          data-scroll
          data-scroll-speed="-4"
          data-scroll-direction="horizontal"
        >
          Please scroll down
        </p>
      </section>

      <section id="threeD" className="threeD" data-scroll-section>
        <h2>
          <span data-scroll data-scroll-repeat data-scroll-speed="5">
            3
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="2">
            D
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="3">
            V
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="5">
            i
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="2">
            b
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="4">
            e
          </span>
          <span data-scroll data-scroll-repeat data-scroll-speed="2">
            s
          </span>
        </h2>
        <div className="skewsec">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="20"
            data-scroll-target="#threeD"
          >
            <span>Please---subscribe---my---channel</span>
          </div>
        </div>
        <div className="skewsec">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-20"
            data-scroll-target="#threeD"
          >
            <span className="">Like---share---and---leave a comment</span>
          </div>
        </div>
      </section>

      <section className="subs d-grid " data-scroll-section>
        <h2 data-scroll data-scroll-repeat>
          <span data-scroll data-scroll-delay="0.15" data-scroll-speed="5">
            S
          </span>
          <span data-scroll data-scroll-delay="0.095" data-scroll-speed="5">
            U
          </span>
          <span data-scroll data-scroll-delay="0.085" data-scroll-speed="5">
            B
          </span>
          <span data-scroll data-scroll-delay="0.075" data-scroll-speed="5">
            S
          </span>
          <span data-scroll data-scroll-delay="0.065" data-scroll-speed="5">
            C
          </span>
          <span data-scroll data-scroll-delay="0.055" data-scroll-speed="5">
            R
          </span>
          <span data-scroll data-scroll-delay="0.045" data-scroll-speed="5">
            I
          </span>
          <span data-scroll data-scroll-delay="0.035" data-scroll-speed="5">
            B
          </span>
          <span data-scroll data-scroll-delay="0.035" data-scroll-speed="5">
            E
          </span>
        </h2>
      </section>
      <div className="footer" data-scroll-section>
        <h1 data-scroll data-scroll-speed="4" data-scroll-position="bottom">
          Naymur Web
        </h1>
      </div>
    </>
  );
};

export default LocomotiveAnimation;
