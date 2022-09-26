import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { withRouter } from "react-router-dom";
const SiderBar = ({ pathname, active, setActive, history }) => {
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
          <span className="mb-1"></span>
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="xl">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Keshav saini</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="d-xl-none mb-0">
            <li
              onClick={() => {
                history.push("/");
                setActive("/");
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
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
                setShow(false);
              }}
              className={`${
                active === "/whatsapp" ? "active" : ""
              } mx-2 cursor-pointer navbar-text`}
            >
              WhatsApp
            </li>{" "}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default withRouter(SiderBar);
