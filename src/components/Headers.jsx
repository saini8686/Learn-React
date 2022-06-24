import { withRouter } from "react-router-dom";
import { useState } from "react";

const Headers = ({ history }) => {
  const pathname = window.location.pathname;
  const [active, setActive] = useState(pathname);

  return (
    <div>
      <h1
        onClick={() => {
          history.push("/");
          setActive("/");
        }}
        className={`${active === "/" ? "active" : "text-white "}`}
      >
        Home
      </h1>
      <h1
        onClick={() => {
          history.push("/login");
          setActive("/login");
        }}
        className={`${active === "/login" ? "active" : "text-white "}`}
      >
        Login from2
      </h1>
      <h1
        onClick={() => {
          history.push("/about");
          setActive("/about");
        }}
        className={`${active === "/about" ? "active" : "text-white "}`}
      >
        About
      </h1>
      <h1
        onClick={() => {
          history.push("/star");
          setActive("/star");
        }}
        className={`${active === "/star" ? "active" : "text-white "}`}
      >
        Star
      </h1>
    </div>
  );
};
export default withRouter(Headers);
