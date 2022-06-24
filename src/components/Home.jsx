import React, { useEffect, useState } from "react";

const Home = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formInitialValue, setFormInitialValue] = useState(initialValues);
  const [formInitialErrors, setFormInitialErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInitialValue({ ...formInitialValue, [name]: value });
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
    if (
      formInitialValue.username &&
      initialValues.email &&
      initialValues.password !== ""
    ) {
      setFormInitialErrors(validate(formInitialValue));
      setIsSubmit(true);
    }
  };
  useEffect(() => {
    console.log(formInitialErrors);
    if (Object.keys(formInitialErrors).length === 0 && isSubmit) {
    }
  }, [formInitialErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // USERNAME CONDITION
    if (!values.username) {
      errors.username = "Username is required";
    }

    // EMAIL CONDITION
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    // PASSWORD CONDITION
    if (!values.password) {
      errors.password = "Password is required";
    } else if (regex.test(values.password.length >= 4)) {
      errors.password = "Password must be more than 4 characters";
    } else if (regex.test(values.password.length > 10)) {
      errors.password = "Password cannot exceed more than 4 characters";
    }
    return errors;
  };
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-5 col-xxl-4">
            {Object.keys(formInitialErrors).length === 0 && isSubmit ? (
              ""
            ) : (
              <div className="text-success text-center mb-3">
                Sign In SuccessFully
              </div>
            )}

            <form className="form_bg p-4" onSubmit={handleFromSubmit}>
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
                    onChange={handleChange}
                  />
                </div>
                <p className="text-danger mb-0">{formInitialErrors.username}</p>
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Email</label>
                  <input
                    className="p-2"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formInitialValue.email}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-danger mb-0">{formInitialErrors.email}</p>
                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2"> Password</label>
                  <input
                    className="p-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formInitialValue.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-danger mb-0">{formInitialErrors.password}</p>
                <button className="fluid bg-primary submit_btn text-white border-1 py-2 w-100 mt-3 mt-lg-4">
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

export default Home;
