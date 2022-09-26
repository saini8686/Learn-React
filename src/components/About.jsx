import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import Toggle from "./Toggle";
const About = () => {
  const [rating2, setRating2] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating2(rate);
    // other logic
  };
  return (
    <>
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={rating2}
          allowHover={false}
        />

        <Toggle />
      </div>
    </>
  );
};

export default About;
