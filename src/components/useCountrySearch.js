import { useState, useEffect } from "react";
/* eslint-disable*/

export default function useCountrySearch(countryArr, arrNum) {
  const [retArr, setretArr] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  useEffect(() => {
    if (!hasMore) return;
    setretArr((prevArr) => [
      ...prevArr,
      ...countryArr.slice(prevArr.length, prevArr.length + 6),
    ]);
    sethasMore(countryArr.length > retArr.length);
  }, [arrNum]);
  return { retArr };
}
