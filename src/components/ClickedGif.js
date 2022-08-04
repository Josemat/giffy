import React from "react";
import useGif from "../hooks/useGif";

const ClickedGif = (params) => {
  const titulo = decodeURI(params.value.id);
  const { gifURL } = useGif();
  return (
    <div className="resultadoGif">
      <img src={gifURL} alt={titulo} />
      <p className="footer">{titulo}</p>
    </div>
  );
};

export default ClickedGif;
