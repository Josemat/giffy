import React from "react";

const GifTrending = ({ img, title, url, id }) => {
  return (
    <div className="trending-container">
      <a href={url} className="trendingimg" id={id}>
        <img src={img} alt={title} />
        <small>{title}</small>
      </a>
    </div>
  );
};

export default GifTrending;
