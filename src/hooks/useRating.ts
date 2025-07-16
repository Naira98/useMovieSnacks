import { useState } from "react";

type UseRatingReturn = [
  number | undefined,
  (newRating: number) => void,
  number | undefined,
  (newRating: number) => void,
  () => void
];

const useRating = (): UseRatingReturn => {
  const [rating, setRating] = useState<undefined | number>(undefined);
  const [tempRating, setTempRating] = useState<undefined | number>(undefined);

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  const handleMouseEnter = (newRating: number) => {
    setTempRating(newRating);
  };

  const handleMouseLeave = () => {
    setTempRating(undefined);
  };

  return [rating, handleRating, tempRating, handleMouseEnter, handleMouseLeave];
};

export default useRating;
