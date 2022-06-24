import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const About = () => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  return (
    <>
      <div>
        <Rating
          onClick={handleRating}
          ratingValue={ratingValue}
          allowHover={false}
        />
        <Rating />
      </div>
    </>
  );
};

export default About;
