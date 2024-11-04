import React from 'react'
import Rating from '@mui/material/Rating';

export default function SkillRating({rating}) {

  return (

      <Rating
        name="half-rating-read"
        defaultValue={rating}
        precision={0.5}
        readOnly
      />

    );
}