import React from "react";
import useGif from "../hooks/useGif";

const ClickedGif = (params) => {
  const titulo = params.value.id;
  const { gifURL } = useGif();
  return (
    <div className="resultadoGif">
      <img src={gifURL} />
      <p className="footer">{titulo}</p>
    </div>
  );
};

export default ClickedGif;
