import React, { useState } from "react";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import { InVisibleEye, VisibleEye } from "./common/Icon";
const LoginFromSecond = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formInitialValue, setFormInitialValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [existValue, setExistValue] = useState(false);
  const [loginFormArray, setLoginFormArray] = useState([]);
  const hanldeUser = (e) => {
    const value = e.target.value;
    setFormInitialValue({
      ...formInitialValue,
      username: value,
    });
    if (value.includes("_") && formInitialValue.username !== "") {
      setExistValue(true);
    } else {
      setExistValue(false);
    }
  };

  const handleSubmit = (e) => {
    setFormErrors(true);
    e.preventDefault();
    const validate = ValidateEmail(formInitialValue.email);
    if (
      formInitialValue.username &&
      formInitialValue.email &&
      formInitialValue.password &&
      (formInitialValue.confirmPassword !== formInitialValue.password) == "" &&
      validate
    ) {
      swal("Done", "SuccessFully is Done ", "success");
      setShowTable(true);
      setFormErrors(false);
      setFormInitialValue({
        ...formInitialValue,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      swal("Oops", "Something went wrong!", "error");
    }
    if (
      formInitialValue.username &&
      formInitialValue.email &&
      formInitialValue.password &&
      formInitialValue.confirmPassword !== ""
    ) {
      loginFormArray.push(formInitialValue);
    }
    // console.log(formInitialValue, "setFormInitialValue");
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toggleConfirmPassword = (e) => {
    e.preventDefault();
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  return (
    <>
      <div className="container my-4 my-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-5 col-xxl-4">
            <form className="form_bg p-4">
              <h1 className="mb-4">Login Form</h1>
              <div className="ui_form">
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Username</label>
                  <input
                    className="p-2"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formInitialValue.username}
                    onChange={(e) => hanldeUser(e)}
                  />
                </div>
                {formErrors && formInitialValue.username === "" ? (
                  <p className="text-danger mb-0">Username is required</p>
                ) : formInitialValue !== "" && existValue ? (
                  <p className="text-success mb-0">Username Is exist</p>
                ) : formInitialValue.username === "" ? (
                  ""
                ) : (
                  <p className="text-danger mb-0">Username Is Does n't exist</p>
                )}

                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Email</label>
                  <input
                    className="p-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formInitialValue.email}
                    onChange={(e) =>
                      setFormInitialValue({
                        ...formInitialValue,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <p className="text-danger mb-0">
                  {formErrors && formInitialValue.email === ""
                    ? "Email is required"
                    : ""}
                </p>
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Password</label>
                  <div className="position-relative">
                    <input
                      className="p-2 w-100"
                      type={passwordType}
                      name="password"
                      placeholder="Password"
                      value={formInitialValue.password}
                      onChange={(e) =>
                        setFormInitialValue({
                          ...formInitialValue,
                          password: e.target.value,
                        })
                      }
                    />
                    <div className="position-absolute eye_box  ">
                      <button
                        className="bg-transparent border-0 p-0 "
                        onClick={togglePassword}
                      >
                        {passwordType === "password" ? (
                          <InVisibleEye />
                        ) : (
                          <VisibleEye />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-danger mb-0">
                  {formErrors && formInitialValue.password === ""
                    ? "Password is required"
                    : ""}
                </p>
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2">Confirm Password</label>
                  <div className="position-relative">
                    <input
                      className="p-2 w-100"
                      type={confirmPasswordType}
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={formInitialValue.confirmPassword}
                      onChange={(e) =>
                        setFormInitialValue({
                          ...formInitialValue,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                    <div className="position-absolute eye_box  ">
                      <button
                        className="bg-transparent border-0 p-0 "
                        onClick={toggleConfirmPassword}
                      >
                        {confirmPasswordType === "password" ? (
                          <InVisibleEye />
                        ) : (
                          <VisibleEye />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-danger mb-0">
                  {formErrors && formInitialValue.confirmPassword === ""
                    ? "Password is required"
                    : formInitialValue.confirmPassword === "" &&
                      formInitialValue.password === ""
                    ? ""
                    : formInitialValue.confirmPassword !== "" &&
                      formInitialValue.confirmPassword !==
                        formInitialValue.password
                    ? "Password Does not match"
                    : ""}
                </p>
                <button
                  type="button"
                  className="fluid bg-primary submit_btn text-white border-1 py-2 w-100 mt-3 mt-lg-4"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {showTable ? (
          <div className="my-4 my-lg-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-white">User Name</th>
                  <th className="text-white">Gmail</th>
                  <th className="text-white">Password</th>
                  <th className="text-white">Confrim Password</th>
                </tr>
              </thead>
              {loginFormArray && loginFormArray.length > 0
                ? loginFormArray.map((val, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td className="text-white">{val.username}</td>
                          <td className="text-white">{val.email}</td>
                          <td className="text-white">{val.password}</td>
                          <td className="text-white">{val.confirmPassword}</td>
                        </tr>
                      </tbody>
                    );
                  })
                : ""}
            </Table>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default LoginFromSecond;
