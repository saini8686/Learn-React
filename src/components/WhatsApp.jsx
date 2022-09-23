import React, { useState } from "react";
import ReactWhatsapp from "react-whatsapp";

const WhatsApp = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="content my-4">
        <h1 className="title text-white">React Whatsapp</h1>
        <section className="library">
          <input
            id="number"
            placeholder="Number"
            value={number}
            className="ms-2 ms-sm-0 mb-2"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            id="message"
            placeholder="Message"
            value={message}
            className="ms-2 mx-sm-3 mb-2"
            onChange={(e) => setMessage(e.target.value)}
          />
          <ReactWhatsapp
            className="ms-2 ms-sm-0 mb-2"
            number={number}
            message={message}
          >
            Open Whatsapp
          </ReactWhatsapp>
        </section>
      </div>
      <ReactWhatsapp
        className="text-white bg-transparent border-0 text-decoration-underline"
        number="8307373978"
        message="Hello Keshav saini"
      >
        Chat With Me
      </ReactWhatsapp>
    </>
  );
};

export default WhatsApp;
