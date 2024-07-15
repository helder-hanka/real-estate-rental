import React, { useState, useEffect } from "react";
import StarRating from "../Svg/StarRating";

interface Props {
  rating: number;
}
const Rating: React.FC<Props> = ({ rating }) => {
  const [matches, setMatch] = useState<boolean>(
    window.matchMedia("(max-width:600px)").matches
  );
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width:600px)");
    const listener = (e: MediaQueryListEvent) => setMatch(e.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [matches]);

  const countRating = (rating: number) => {
    const number = rating;
    const colorRed = "#FF6060";
    const colorWhite = "#E3E3E3";

    const arrRating = [];

    for (let i = 1, iRating = number; i <= iRating; i++) {
      arrRating.push(colorRed);
    }

    if (arrRating.length <= 5) {
      for (let i = arrRating.length, iRating = 5; i < iRating; i++) {
        arrRating.push(colorWhite);
      }
    }
    return arrRating;
  };

  console.log("Rating", rating, "Arr", countRating(rating));
  return (
    <StarRating
      width={matches ? "98px" : "196px"}
      height={matches ? "18px" : "36px"}
      fillOne={countRating(rating)[0]}
      fillTwo={countRating(rating)[1]}
      fillThree={countRating(rating)[2]}
      fillFour={countRating(rating)[3]}
      fillFive={countRating(rating)[4]}
    />
  );
};

export default Rating;
