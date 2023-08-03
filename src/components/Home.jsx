import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const Home = ({ history }) => {
  const localvalue = localStorage.getItem("show");
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (localvalue === "false" || localvalue === null) {
      console.log(localvalue, "sjdfkals");
      history.push("/");
    }
  }, [localvalue]);
  return (
    <>
      <div className="text-white">Welcome {user?.email} </div>
    </>
  );
};

export default withRouter(Home);
