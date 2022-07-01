import React, { useEffect, useState } from "react";
import GetTrending from "../services/GetTrending";
import GifTrending from "./GifTrending";

const Links = ({ limit }) => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    GetTrending(limit).then((data) => setTrend(data));
  }, [limit]);
  return (
    <>
      {trend.map((list) => {
        const url = list.url;
        const imgSmall = list.images.fixed_height_small.url;
        const title = list.title;
        const key = list.id;
        return (
          <GifTrending
            url={url}
            img={imgSmall}
            title={title}
            key={key}
            id={key}
          />
        );
      })}
    </>
  );
};

export default Links;
