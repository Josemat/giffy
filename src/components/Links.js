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
      <div>
        <h3>Top Trending</h3>
        <div className="contenedorTrending">
          {trend.map((list) => {
            // console.log(list);
            const imgOriginalUrl = list.images.original.url;
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
                imgOriginalUrl={imgOriginalUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Links;
