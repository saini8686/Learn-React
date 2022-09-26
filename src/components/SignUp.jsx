import React, { useState } from "react";
import swal from "sweetalert";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { InVisibleEye, VisibleEye } from "./common/Icon";
import { auth } from "../firebase";
const SignUpFrom = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(true);

    const validate = ValidateEmail(formValue.email);
    if (formValue.email && formValue.password && validate) {
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          swal("Done", "Sign In Successfully!", "success");
          setFormErrors(false);
          setFormValue({
            ...formValue,
            email: "",
            password: "",
          });
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          swal("Oops", errorMessage, "error");
          // ..
        });
    } else {
      swal("Oops", "Please fill all the fields!", "error");
    }
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

  return (
    <>
      <div className="container my-4 my-lg-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-5 col-xxl-4">
            <form className="form_bg p-4">
              <h1 className="mb-4">Sign Up Form</h1>
              <div className="ui_form">
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Email</label>
                  <input
                    className="p-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formValue.email}
                    onChange={(e) =>
                      setFormValue({
                        ...formValue,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <p className="text-danger mb-0">
                  {formErrors && formValue.email === ""
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
                      value={formValue.password}
                      onChange={(e) =>
                        setFormValue({
                          ...formValue,
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
                  {formErrors && formValue.password === ""
                    ? "Password is required"
                    : ""}
                </p>

                <button
                  type="button"
                  className="fluid bg-primary submit_btn text-white border-1 py-2 w-100 mt-3 mt-lg-4"
                  onClick={(e) => handleSubmit(e)}
                >
                  {Loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpFrom;
