import React, { useState } from "react";
import Input from "./Input";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  console.log("Correct", toggle);

  return (
    <>
      <div className="mt-3">
        <button onClick={() => setToggle(!toggle)}>Toggle</button>

        {toggle && <Input />}
      </div>
    </>
  );
};

export default Toggle;
