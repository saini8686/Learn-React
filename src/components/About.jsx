import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
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
      </div>
    </>
  );
};

export default About;
