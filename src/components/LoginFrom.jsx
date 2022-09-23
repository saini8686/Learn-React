import React, { useState } from "react";
import swal from "sweetalert";
import { InVisibleEye, VisibleEye } from "./common/Icon";
const LoginFrom = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formInitialValue, setFormInitialValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const handleSubmit = (e) => {
    setFormErrors(true);
    e.preventDefault();
    const validate = ValidateEmail(formInitialValue.email);
    if (
      formInitialValue.username &&
      formInitialValue.email &&
      formInitialValue.password &&
      (formInitialValue.confirmPassword !== formInitialValue.password) === "" &&
      validate
    ) {
      swal("Done", "Something went correct!", "success");
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
    console.log(formInitialValue, "setFormInitialValue");
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
                    onChange={(e) =>
                      setFormInitialValue({
                        ...formInitialValue,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <p className="text-danger mb-0">
                  {formErrors && formInitialValue.username === ""
                    ? "Username is required"
                    : ""}
                </p>
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
                  {/* {formErrors && formInitialValue.confirmPassword === ""
                    ? "Password is required"
                    : formInitialValue.confirmPassword !==
                      formInitialValue.password
                    ? "Password Does not match"
                    : ""} */}
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
      </div>
    </>
  );
};

export default LoginFrom;
