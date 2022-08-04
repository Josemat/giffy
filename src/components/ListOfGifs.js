import React, { useState, useEffect } from "react";
import GetGifs from "../services/GetGifs";
import Gifs from "./Gifs";
import Intersection from "./Intersection";
import Spinner from "./Spinner";

const ListOfGifs = ({ keyword }) => {
  const [gif, setGif] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    GetGifs({ keyword }).then((gifs) => {
      setGif(gifs);
      setCargando(false);
    });
  }, [keyword]);

  if (cargando) return <Spinner />;

  return (
    <>
      <div className="listaDeGifs">
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
        <Intersection keyword={keyword} />
      </div>
    </>
  );
};
export default ListOfGifs;
