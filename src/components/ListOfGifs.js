import React, { useState, useEffect } from "react";
import GetGifs from "../services/GetGifs";
import Gifs from "./Gifs";
import Links from "./Links";

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
  if (cargando)
    return (
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    );
  return (
    <>
      <div className="contenedor2">
        <div className="listaDeGifs">
          {gif.map(({ id, url, title, slug }) => (
            <Gifs
              key={id}
              url={url}
              title={title}
              id={id}
              slug={slug}
              alt={title}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>Top trending</h3>
        <div className="contenedorTrending">
          <Links limit={10} />
        </div>
      </div>
    </>
  );
};

export default ListOfGifs;
