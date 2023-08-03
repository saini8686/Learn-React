import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const ChangeColorBoxOnType = ({ history }) => {
  const [value, getValue] = useState("");
  const localvalue = localStorage.getItem("show");

  useEffect(() => {
    if (localvalue === "false" || localvalue === null) {
      console.log(localvalue, "sjdfkals");
      history.push("/");
    }
  }, [localvalue]);
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center mt-5 ">
        <div
          className="box"
          style={{
            background: `${value === "" ? "red" : value}`,
            border: `1px solid ${value === "" ? "red" : value}`,
          }}
        ></div>
        <input
          className="input_box mt-4 bg-transparent px-3 py-2"
          type="text"
          style={{
            border: `1px solid ${value === "" ? "greenyellow" : value}`,
          }}
          placeholder="Type Color"
          onChange={(e) => getValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default withRouter(ChangeColorBoxOnType);
