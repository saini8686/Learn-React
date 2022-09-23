import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import Toggle from "./Toggle";
const About = () => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <>
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          allowHover={false}
        />

        <Toggle />
      </div>
    </>
  );
};

export default About;
