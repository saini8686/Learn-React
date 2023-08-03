import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { withRouter } from "react-router-dom";
const SiderBar = ({
  pathname,
  active,
  setActive,
  history,
  localvalue,
  removehandler,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="d-xl-none bg-transparent border-0 p-0"
        onClick={handleShow}
      >
        <div className="humburger-menu">
          <span className="mb-1"></span>
          <span className="mb-1"></span>
          <span className=""></span>
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="xl">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Keshav saini</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {localvalue ? (
            <ul className=" d-xl-none list-unstyled mb-0">
              <li
                onClick={() => {
                  history.push("/home");
                  setActive("/home");
                  handleClose();
                }}
                className={`${
                  active === "/home" ? "active" : "text-black"
                }  mx-2 cursor-pointer navbar-text`}
              >
                <span>Home</span>
              </li>
              <li
                onClick={() => {
                  history.push("/signup");
                  setActive("/signup");
                  handleClose();
                }}
                className={`${
                  active === "/signup" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span> SignUp/Login</span>
              </li>
              <li
                onClick={() => {
                  history.push("/loginsecond");
                  setActive("/loginsecond");
                  handleClose();
                }}
                className={`${
                  active === "/loginsecond" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span>Login2</span>
              </li>
              <li
                onClick={() => {
                  history.push("/star");
                  setActive("/star");
                  handleClose();
                }}
                className={`${
                  active === "/star" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span> About/Star</span>
              </li>
              <li
                onClick={() => {
                  history.push("/lottie");
                  setActive("/lottie");
                  handleClose();
                }}
                className={`${
                  active === "/lottie" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span> Lottie Animation/Animation</span>
              </li>
              <li
                onClick={() => {
                  history.push("/locomotive");
                  setActive("/locomotive");
                  handleClose();
                }}
                className={`${
                  active === "/locomotive" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span> Locomotive Animation</span>
              </li>
              <li
                onClick={() => {
                  history.push("/roadmap");
                  setActive("/roadmap");
                  handleClose();
                }}
                className={`${
                  active === "/roadmap" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span>Roadmap</span>
              </li>
              <li
                onClick={() => {
                  history.push("/changecolor");
                  setActive("/changecolor");
                  handleClose();
                }}
                className={`${
                  active === "/changecolor" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span>Change Color Box</span>
              </li>
              <li
                onClick={() => {
                  history.push("/whatsapp");
                  setActive("/whatsapp");
                  handleClose();
                }}
                className={`${
                  active === "/whatsapp" ? "active" : "text-black"
                } mx-2 cursor-pointer navbar-text`}
              >
                <span>WhatsApp</span>
              </li>
              <button
                onClick={() => {
                  history.push("/");
                  setActive("/");
                  handleClose();
                  removehandler();
                }}
                className={`${
                  active === "/" ? "active" : "text-black"
                } mx-2 cursor-pointer border-0 bg-transparent navbar-text`}
              >
                <span>Log Out</span>
              </button>
            </ul>
          ) : (
            <ul className=" d-xl-none mb-0">
              <li
                onClick={() => {
                  history.push("/");
                  setActive("/");
                  handleClose();
                }}
                className={`${
                  active === "/" ? "active" : "text-black"
                }  mx-2 cursor-pointer navbar-text`}
              >
                <span>Sign In</span>
              </li>
            </ul>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default withRouter(SiderBar);
