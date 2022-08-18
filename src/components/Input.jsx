import React, { useEffect, useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [lname, setLastName] = useState("");
  const [roll, setRoll] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(true);
    if (name && lname && roll !== "") {
      setShow(true);
      console.log("Fisrt Name :-", name);
      console.log("Last Name ", lname);
      console.log("Roll :-", roll);
    }
  };
  // useEffect(() => {
  //   console.log("Fisrt Name :-", name);
  // }, [name]);
  // useEffect(() => {
  //   console.log("Last Name ", lname);
  // }, [lname]);
  // useEffect(() => {
  //   console.log("Roll :-", roll);
  // }, [roll]);

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="mb-3">
          <input
            className=" "
            type="text"
            placeholder="First Name"
            onChange={(e) => setName(e.target.value)}
          />
          {error && name === "" ? (
            <p className=" mb-0 text-danger">First Name is required</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <input
            className=""
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {error && lname === "" ? (
            <p className=" mb-0  text-danger">Last Name is required</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-3">
          <input
            className=""
            type="text"
            placeholder="Roll N0."
            onChange={(e) => setRoll(e.target.value)}
          />
          {error && roll === "" ? (
            <p className=" mb-0  text-danger">Roll no is required</p>
          ) : (
            ""
          )}
        </div>
        <button onClick={() => handleChange()}>Submit</button>

        {show ? (
          <>
            {" "}
            <h1 className="text-white">First Name :- {name}</h1>
            <h2 className="text-white">Last Name :- {lname}</h2>
            <h3 className="text-white">Roll :- {roll}</h3>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Input;
