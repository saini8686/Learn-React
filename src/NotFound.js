import React from "react";
import { withRouter } from "react-router-dom";
import NotFoundGif from "./components/image/HTML-404-Error-Page.gif";
const NotFound = ({ history }) => {
  return (
    <>
      <div className=" overflow-hidden min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <img className="w-25" src={NotFoundGif} alt="NotFoundGif" />
        <button
          onClick={() => {
            history.push("/");
          }}
          className="go-back-button px-3 py-2 text-white"
        >
          Go Back Home
        </button>
      </div>
    </>
  );
};

export default withRouter(NotFound);
