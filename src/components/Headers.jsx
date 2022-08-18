import { withRouter } from "react-router-dom";
import { useState } from "react";

const Headers = ({ history }) => {
  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);

  return (
    <div>
      <div className="d-flex flex-wrap position-relative z-index-100">
        <h6
          onClick={() => {
            history.push("/");
            setActive("/");
          }}
          className={`${
            active === "/" ? "active" : "text-white "
          }  mx-2 cursor-pointer`}
        >
          Home
        </h6>
        <h6
          onClick={() => {
            history.push("/signup");
            setActive("/signup");
          }}
          className={`${
            active === "/signup" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Sign Up
        </h6>
        <h6
          onClick={() => {
            history.push("/login");
            setActive("/login");
          }}
          className={`${
            active === "/login" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Login
        </h6>
        <h6
          onClick={() => {
            history.push("/loginsecond");
            setActive("/loginsecond");
          }}
          className={`${
            active === "/loginsecond" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Login Second
        </h6>
        <h6
          onClick={() => {
            history.push("/about");
            setActive("/about");
          }}
          className={`${
            active === "/about" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          About
        </h6>
        <h6
          onClick={() => {
            history.push("/star");
            setActive("/star");
          }}
          className={`${
            active === "/star" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Star
        </h6>
        <h6
          onClick={() => {
            history.push("/light");
            setActive("/light");
          }}
          className={`${
            active === "/light" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Police Light
        </h6>
        <h6
          onClick={() => {
            history.push("/lottie");
            setActive("/lottie");
          }}
          className={`${
            active === "/lottie" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Lottie Animation
        </h6>
        <h6
          onClick={() => {
            history.push("/locomotive");
            setActive("/locomotive");
          }}
          className={`${
            active === "/locomotive" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Locomotive Animation
        </h6>
        <h6
          onClick={() => {
            history.push("/roadmap");
            setActive("/roadmap");
          }}
          className={`${
            active === "/roadmap" ? "active" : "text-white "
          } mx-2 cursor-pointer`}
        >
          Roadmap
        </h6>
      </div>
    </div>
  );
};
export default withRouter(Headers);
