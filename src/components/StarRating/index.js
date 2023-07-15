import React from 'react';

const StarRating = ({ rating }) => {
  if (typeof rating !== 'number' || isNaN(rating)) {
    return null; // If rating is undefined or not a number, don't show stars
  }

  return <div className='rating' style={{ '--rating-value': rating }}></div>;
};

export default StarRating;
