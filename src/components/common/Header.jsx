import { withRouter } from "react-router-dom";
import { useState } from "react";
import SiderBar from "./SiderBar";
import Logo from "../image/keshav saini (11).gif";
const Headers = ({ history }) => {
  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);

  return (
    <>
      <section className=" navbar-bg py-3">
        <div className="container d-flex  align-items-center justify-content-between  position-relative z-index-100">
          <div>
            <span>
              <img className="Logo" src={Logo} alt="logo" />
            </span>
          </div>
          <div className="d-none d-xl-block">
            <ul className=" d-flex list-unstyled mb-0">
              <li
                onClick={() => {
                  history.push("/");
                  setActive("/");
                }}
                className={`${
                  active === "/" ? "active" : ""
                }  mx-2 cursor-pointer navbar-text`}
              >
                Home
              </li>
              <li
                onClick={() => {
                  history.push("/signup");
                  setActive("/signup");
                }}
                className={`${
                  active === "/signup" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                SignUp/Login
              </li>
              <li
                onClick={() => {
                  history.push("/loginsecond");
                  setActive("/loginsecond");
                }}
                className={`${
                  active === "/loginsecond" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                Login2
              </li>
              <li
                onClick={() => {
                  history.push("/star");
                  setActive("/star");
                }}
                className={`${
                  active === "/star" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                About/Star
              </li>
              <li
                onClick={() => {
                  history.push("/lottie");
                  setActive("/lottie");
                }}
                className={`${
                  active === "/lottie" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                Lottie Animation/Animation
              </li>
              <li
                onClick={() => {
                  history.push("/locomotive");
                  setActive("/locomotive");
                }}
                className={`${
                  active === "/locomotive" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                Locomotive Animation
              </li>
              <li
                onClick={() => {
                  history.push("/roadmap");
                  setActive("/roadmap");
                }}
                className={`${
                  active === "/roadmap" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                Roadmap
              </li>
              <li
                onClick={() => {
                  history.push("/changecolor");
                  setActive("/changecolor");
                }}
                className={`${
                  active === "/changecolor" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                Change Color Box
              </li>
              <li
                onClick={() => {
                  history.push("/whatsapp");
                  setActive("/whatsapp");
                }}
                className={`${
                  active === "/whatsapp" ? "active" : ""
                } mx-2 cursor-pointer navbar-text`}
              >
                WhatsApp
              </li>{" "}
            </ul>
          </div>
          <div className="d-xl-none">
            <SiderBar
              pathname={pathname}
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default withRouter(Headers);
