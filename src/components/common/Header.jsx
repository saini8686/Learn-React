import { withRouter } from "react-router-dom";
import { useState } from "react";
import SiderBar from "./SiderBar";
import Logo from "../image/logo.svg";
const Headers = ({ history, show, setShow }) => {
  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);
  const localvalue = localStorage.getItem("show");
  const removehandler = () => {
    localStorage.removeItem("show");
  };

  return (
    <>
      <section className=" navbar-bg py-3">
        <div className="container d-flex  align-items-center justify-content-between  position-relative z-index-100">
          <div>
            <span>
              <img
                onClick={() => {
                  history.push("/home");
                }}
                className="Logo cursor-pointer"
                src={Logo}
                alt="logo"
              />
            </span>
          </div>
          <div className="d-none d-xl-block">
            {localvalue ? (
              <ul className=" d-flex list-unstyled mb-0">
                <li
                  onClick={() => {
                    history.push("/home");
                    setActive("/home");
                  }}
                  className={`${
                    active === "/home" ? "active" : "text-white"
                  }  mx-2 cursor-pointer navbar-text`}
                >
                  <span>Home</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/signup");
                    setActive("/signup");
                  }}
                  className={`${
                    active === "/signup" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span> SignUp/Login</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/loginsecond");
                    setActive("/loginsecond");
                  }}
                  className={`${
                    active === "/loginsecond" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span>Login2</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/star");
                    setActive("/star");
                  }}
                  className={`${
                    active === "/star" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span> About/Star</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/lottie");
                    setActive("/lottie");
                  }}
                  className={`${
                    active === "/lottie" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span> Lottie Animation/Animation</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/locomotive");
                    setActive("/locomotive");
                  }}
                  className={`${
                    active === "/locomotive" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span> Locomotive Animation</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/roadmap");
                    setActive("/roadmap");
                  }}
                  className={`${
                    active === "/roadmap" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span>Roadmap</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/changecolor");
                    setActive("/changecolor");
                  }}
                  className={`${
                    active === "/changecolor" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span>Change Color Box</span>
                </li>
                <li
                  onClick={() => {
                    history.push("/whatsapp");
                    setActive("/whatsapp");
                  }}
                  className={`${
                    active === "/whatsapp" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span>WhatsApp</span>
                </li>
                <button
                  onClick={() => {
                    history.push("/");
                    setActive("/");
                    removehandler();
                  }}
                  className={`${
                    active === "/" ? "active" : "text-white"
                  } mx-2 cursor-pointer navbar-text`}
                >
                  <span>Log Out</span>
                </button>
              </ul>
            ) : (
              <ul className=" d-flex list-unstyled mb-0">
                <li
                  onClick={() => {
                    history.push("/");
                    setActive("/");
                  }}
                  className={`${
                    active === "/" ? "active" : "text-white"
                  }  mx-2 cursor-pointer navbar-text`}
                >
                  <span>Sign In</span>
                </li>
              </ul>
            )}
          </div>
          <div className="d-xl-none">
            <SiderBar
              pathname={pathname}
              active={active}
              setActive={setActive}
              localvalue={localvalue}
              removehandler={removehandler}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default withRouter(Headers);
