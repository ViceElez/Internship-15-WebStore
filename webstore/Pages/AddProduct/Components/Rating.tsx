import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

interface BasicRatingProps {
  rating: number | null;
  setRating: (value: number | null) => void;
}

export default function BasicRating({ rating, setRating }: BasicRatingProps) {
  return (
    <Box sx={{ "& > legend": { mt: 2 } }}>
      <Rating
        id="rating"
        name="rating"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        defaultValue={0}
        precision={0.5}
        size="large"
      />
    </Box>
  );
}
