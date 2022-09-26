import React from "react";
import LogoImg from "../image/keshav saini.gif";

const PreLoader = () => {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center loading">
        <img className="pulse" src={LogoImg} alt="loader" />{" "}
      </div>
    </>
  );
};

export default PreLoader;
