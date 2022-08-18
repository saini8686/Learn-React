import React, { useState } from "react";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import uploadimages from "../components/image/uploadImg.png";
import { InVisibleEye, VisibleEye } from "./common/Icon";

const LoginFromSecond = () => {
  const [uploadImage, setUploadImage] = useState();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    uploadImages1: uploadImage,
  };
  const [newArray, setNewArray] = useState([]);
  const [formInitialValue, setFormInitialValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [existValue, setExistValue] = useState(false);
  const [strongPassValue, setStrongPassValue] = useState(false);

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
    const validate = ValidateEmail(formInitialValue.email);
    setFormErrors(true);
    e.preventDefault();
    // const strongPass = StrongPassword(formInitialValue.password);
    if (
      formInitialValue.username &&
      formInitialValue.email &&
      formInitialValue.password &&
      (formInitialValue.confirmPassword !== formInitialValue.password) == "" &&
      uploadImage !== undefined &&
      // formInitialValue.uploadImages1 !== undefined &&
      validate &&
      existValue === true
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
        uploadImages1: "",
      });
      setUploadImage("");
    } else {
      swal("Oops", "Something went wrong!", "error");
    }
    if (
      formInitialValue.username &&
      formInitialValue.email &&
      validate &&
      formInitialValue.password &&
      uploadImage !== undefined &&
      formInitialValue.confirmPassword !== "" &&
      existValue === true
      // strongPass
    ) {
      const data = {
        username: formInitialValue.username,
        email: formInitialValue.email,
        password: formInitialValue.password,
        confirmPassword: formInitialValue.confirmPassword,
        uploadImage: uploadImage,
      };

      newArray.push(data);
      console.log(newArray, "newArray");
    }
  };

  const deleteHandler = (index) => {
    const Data = [...newArray];
    const result = Data.filter((word, i) => i !== index);
    setNewArray(result);
  };
  const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };
  // var Data = formInitialValue.password;
  // console.log("Data", Data);
  // var reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";
  // var test1 = reg.test(Data);
  // console.log("test ", test1);
  const passwordreg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
  // const uploadHandler = (e) => {
  //   const image = URL.createObjectURL(e.target.files[0]);
  //   setUploadImage(image);
  // };
  const uploadHandler = (e) => {
    let image = [];
    for (let index = 0; index < e.target.files.length; index++) {
      image.push(URL.createObjectURL(e.target.files[index]));
    }
    setUploadImage(image);
  };
  return (
    <>
      <div className="container my-4 my-lg-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="text-center">
              <input
                id="updloadImg"
                className="w-100"
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={(e) => uploadHandler(e)}
              />
              <label htmlFor="updloadImg">
                {uploadImage ? (
                  <img className="w-100" src={uploadImage[0]} alt="uploadImg" />
                ) : (
                  <img className="w-100" src={uploadimages} alt="uploadImg" />
                )}
              </label>
            </div>
          </div>
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
                      minLength={8}
                      maxLength={32}
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

                {formErrors && formInitialValue.password === "" ? (
                  <p className="text-danger">Password is required</p>
                ) : formErrors &&
                  passwordreg.test(formInitialValue.password) === false ? (
                  <p className="text-warning">Password is not strong</p>
                ) : (
                  ""
                )}

                <div className="field mt-3 mt-lg-4  d-flex flex-column">
                  <label className="mb-2">Confirm Password</label>
                  <div className="position-relative">
                    <input
                      className="p-2 w-100"
                      type={confirmPasswordType}
                      name="confirmpassword"
                      minLength={8}
                      maxLength={32}
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
                    ? "Confirm Password is required"
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

        {showTable && newArray && newArray.length > 0 ? (
          <div className="my-4 my-lg-5">
            <Table striped bordered hover responsive="xxxl">
              <thead>
                <tr>
                  <th className="text-white text-nowrap">User Name</th>
                  <th className="text-white text-nowrap">Gmail</th>
                  <th className="text-white text-nowrap">Password</th>
                  <th className="text-white text-nowrap">Confrim Password</th>
                  <th className="text-white text-nowrap">Images</th>
                  <th className="text-white text-nowrap">Status</th>
                </tr>
              </thead>
              {newArray && newArray.length > 0
                ? newArray.map((val, index) => {
                    console.log("newArrayddddddddddd", val);
                    return (
                      <>
                        <tbody key={index}>
                          <tr>
                            <td className="text-white text-nowrap">
                              {val.username}
                            </td>
                            <td className="text-white text-nowrap">
                              {val.email}
                            </td>
                            <td className="text-white text-nowrap">
                              {val.password}
                            </td>
                            <td className="text-white text-nowrap">
                              {val.confirmPassword}
                            </td>
                            <td className="text-white text-nowrap">
                              {val.uploadImage &&
                                val.uploadImage.map((obj, index) => {
                                  return (
                                    <span key={index}>
                                      <img
                                        className="img_width mx-1"
                                        src={obj}
                                        alt=""
                                      />
                                    </span>
                                  );
                                })}
                            </td>
                            <td className="text-white text-nowrap">
                              <button
                                className="bg-warning border-0 rounded-pill px-3"
                                type="button"
                                onClick={() => deleteHandler(index)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </>
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
