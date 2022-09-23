import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriterAnimation = () => {
  return (
    <>
      <div className="text-white">
        <Typewriter
          options={{
            strings: [
              "<span class=d-block>const route = `<a href=https://api.portals.fi/vi/portal/${network} target=_blank>https://api.portals.fi/vi/portal/${network}</a>`;</span> <span class=d-block>const params = {</span><span class=text_block>     takerAddress: userAddress,</span><span class=text_block> sellToken: yearnDaiVault,</span><span class=text_block> buyToken: sushiUsdcWeth,</span> <span class=text_block>sellAmount,</span><span class=d-block>};</span><span class=d-block>const {data} =await axios.get(route, {params} );</span><span class=d-block>return data;</span>",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            cursor: "",
          }}
        />
      </div>
    </>
  );
};

export default TypeWriterAnimation;
