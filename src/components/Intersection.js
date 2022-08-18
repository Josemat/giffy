import React, { useState, useEffect, useCallback } from "react";
import GetGifs from "../services/GetGifs";
import Gifs from "./Gifs";
import useNearScreen from "../hooks/useNearScreen";
import debounce from "just-debounce-it";

const INITIAL_PAGE = 0;
const Intersection = ({ keyword }) => {
  const [gif, setGif] = useState([]);
  const [offset, setOffset] = useState(INITIAL_PAGE);
  const { isNearScreen, fromRef } = useNearScreen({ once: false });

  const handleDebounce = useCallback(
    debounce(() => setOffset((prevOff) => prevOff + 1), 300),
    []
  );

  useEffect(() => {
    if (isNearScreen) handleDebounce();
  }, [isNearScreen, handleDebounce]);

  useEffect(() => {
    if (offset === INITIAL_PAGE) return;
    GetGifs({ keyword, offset }).then((nextGifs) => {
      setGif((prevGifs) => prevGifs.concat(nextGifs));
    });
  }, [offset, keyword]);

  return (
    <div className="infinite">
      {gif.map(({ id, url, title, slug, imgOriginalUrl }) => (
        <Gifs
          key={id}
          url={url}
          title={title}
          id={id}
          slug={slug}
          alt={title}
          imgOriginalUrl={imgOriginalUrl}
        />
      ))}
      <div ref={fromRef}></div>
    </div>
  );
};

export default Intersection;
