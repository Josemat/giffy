import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import GetSingleGif from "../services/GetSingleGif";
import Spinner from "./Spinner";

const ClickedGif = (params) => {
  const [cargando, setCargando] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [source, setsource] = useState("");
  const [frames, setframes] = useState("");
  const { gifURL, setGifURL } = useGif();
  useEffect(
    (param) => {
      if (!gifURL) setCargando(true);
      GetSingleGif({ id: params.value.id }).then((el) => {
        setGifURL(el.images.original.url);
        setTitulo(el.title);
        setsource(el.source);
        setframes(el.images.original.frames);
        setCargando(false);
      });
    },
    [gifURL, params.value.id, setGifURL]
  );
  if (cargando) return <Spinner />;
  return (
    <div className="resultadoGif">
      {cargando ? <Spinner /> : <img src={gifURL} alt={titulo} />}
      <p className="footer">{titulo}</p>
      <small>frames: {frames}</small>
      <br />
      {source ? (
        <small>
          source:{" "}
          <a className="footer" href={source}>
            {source}
          </a>
        </small>
      ) : null}
    </div>
  );
};

export default ClickedGif;
