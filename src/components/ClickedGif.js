import React from "react";
import useGif from "../hooks/useGif";

const ClickedGif = (params) => {
  const titulo = decodeURI(params.value.id);
  const { gifURL } = useGif();

  let direccionGif = gifURL ? gifURL : localStorage.getItem("gifURL");
  return (
    <div className="resultadoGif">
      <img src={direccionGif} alt={titulo} />
      <p className="footer">{titulo}</p>
    </div>
  );
};

export default ClickedGif;
