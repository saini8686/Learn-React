import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect } from "react";
import { StraightDivider } from "../components/common/Icon";
import { data } from "./RoadmapData";

gsap.registerPlugin(ScrollTrigger);
const Roadmap = () => {
  const flameAndAcitveLineHandler = () => {
    //=============== GSAP SCROLL-TRIGGER ANIMATION (FIRE FLAME AND ACTIVE LINE) ==================//
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".rc-roadmap-wrapper",
        scrub: true,
        start: "top center",
        end: "100% center",
      },
      defaults: {
        ease: "none",
      },
    });
    tl.fromTo(
      ".rc-roadmap-fire",
      {
        top: "0%",
        y: "-50%",
      },
      {
        top: "100%",
      }
    );

    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".rc-roadmap-wrapper",
        scrub: true,
        start: "top center",
        end: "100% center",
      },
      defaults: {
        ease: "none",
      },
    });
    t2.fromTo(
      ".rc-roadmap-active-line",
      {
        height: "0px",
      },
      {
        height: "100%",
      }
    );
  };
  useEffect(() => {
    flameAndAcitveLineHandler();
  }, []);

  return (
    <>
      <div className="blank_box"></div>

      <div className="pt-4"></div>
      <section id="roadmap" className=" my-0 pt-sm-5 observer-section">
        <div className="col-9 col-xl-12 mx-auto  d-flex justify-content-center">
          <h1>Roadmap</h1>
        </div>
        <div className="container py-5 text-white py-sm-5">
          <div className="rc-roadmap-wrapper my-5 ">
            <div className="rc-roadmap-active-line"></div>
            <div className="rc-roadmap-fire"></div>
            {data.map((obj, i) => (
              <div
                key={i}
                className="d-flex  rc-roadmap-item py-4 position-relative justify-content-between align-items-center"
              >
                <div
                  className={`w-50 mb-5  order-2 order-lg-1 rc-roadmap-left-wrapper gsap-left-wrapper_${i}  px-sm-5 d-flex ${
                    i == 0 ? "pe-5 justify-content-end " : ""
                  } ${
                    i > 0 && i % 2 == 0
                      ? "justify-content-center pe-5"
                      : "justify-content-center ps-5"
                  }`}
                >
                  <div className="rc-roadmap-left ps-5 ps-lg-0">
                    <h5 className="font-lg mt-lg-5 text-light-red fw-semibold">
                      {obj.phase}
                    </h5>
                    <h1 className="font-3xl fw-semibold"> {obj.title} </h1>

                    <p className="font-sm text-grey">{obj.desc}</p>
                  </div>
                </div>
                <div
                  className={`w-50 mb-5  order-1 order-lg-2 rc-roadmap-right-wrapper gsap-right-wrapper_${i} px-sm-5 ${
                    i > 0 && i % 2 ? "" : "text-lg-center"
                  }`}
                >
                  <div className={`rc-roadmap-right ps-5 ps-lg-0`}>
                    <div
                      className={`rc-roadmap-img-rotate text-center ${
                        i === 0 ? "text-lg-center " : ""
                      } ${
                        i > 0 && i % 2 == 0 ? "text-lg-center" : "text-lg-end"
                      }`}
                    >
                      <h2>Image</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="blank_box"></div>
    </>
  );
};

export default Roadmap;
