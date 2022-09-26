import React, { useState, useRef } from "react";
import ReactWhatsapp from "react-whatsapp";
import MainFilter from "./Filter/MainFilter";
import FilterData from "./FilterData";

const WhatsApp = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);

  console.log(number, "number");
  return (
    <>
      <ReactWhatsapp
        className="text-white bg-transparent border-0 text-decoration-underline my-4"
        number="+918307373978"
        message="Hello Keshav saini"
      >
        Direct Chat With Me On what's app
      </ReactWhatsapp>
      <div className="chats">
        <h1 className="title text-white">React Whatsapp</h1>
        <section className="library">
          <input
            id="number"
            placeholder="Number"
            ref={ref}
            defaultValue="My default value"
            value={number}
            type="number"
            className="ms-2 ms-sm-0 mb-2"
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              const regex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
              if (
                e.target.value === "" ||
                re.test(e.target.value) ||
                regex.test(e.target.value)
              ) {
                setNumber(e.target.value);
              }
            }}
          />
          <input
            id="message"
            placeholder="Message"
            value={message}
            type="text"
            className="ms-2 mx-sm-3 mb-2"
            onChange={(e) => setMessage(e.target.value)}
          />
          <ReactWhatsapp
            className="ms-2 ms-sm-0 mb-2"
            number={`+91${number}`}
            message={message}
            disabled={
              number === "" ||
              number.length <= 9 ||
              number.length >= 13 ||
              message.length <= 4 ||
              message === ""
            }
          >
            Open Whatsapp
          </ReactWhatsapp>
        </section>
      </div>
      <MainFilter />
      <FilterData />
    </>
  );
};

export default WhatsApp;
