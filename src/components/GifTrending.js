import React from "react";
import { Link } from "wouter";
import useGif from "../hooks/useGif";

const GifTrending = ({ img, title, id, imgOriginalUrl }) => {
  const { setGifURL } = useGif();
  return (
    <div className="trending-container">
      <Link
        to={`/search/gif/${title}`}
        className="trendingimg"
        id={id}
        onClick={() => setGifURL(imgOriginalUrl)}
      >
        <img src={img} alt={title} />
        <small>{title}</small>
      </Link>
    </div>
  );
};

export default GifTrending;
