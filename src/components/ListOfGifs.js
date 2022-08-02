import React, { useState, useEffect } from "react";
import GetGifs from "../services/GetGifs";
import Gifs from "./Gifs";
import Spinner from "./Spinner";

const INITIAL_PAGE = 0;

const ListOfGifs = ({ keyword }) => {
  const [gif, setGif] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [offset, setOffset] = useState(INITIAL_PAGE);
  console.log(offset);
  useEffect(() => {
    setCargando(true);
    GetGifs({ keyword, offset }).then((gifs) => {
      setGif(gifs);
      setCargando(false);
    });
  }, [keyword, offset]);

  if (cargando) return <Spinner />;
  return (
    <>
      <div className="contenedor2">
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
        </div>
      </div>
      {/* <button onClick={() => setOffset()}>Siguiente</button> */}
    </>
  );
};

export default ListOfGifs;
