import React from "react";
import { Star } from "../star";

import "./style.css";

export const StarRating = ({
  starSelected = 0,
  totalStars = 5,
  onRate = (f) => f,
}) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => {
        return (
          <Star
            key={i}
            selected={i < starSelected}
            onClick={() => onRate(i + 1)}
          />
        );
      })}
      <p className='text'>
        {starSelected} of {totalStars} stars
      </p>
    </div>
  );
};
