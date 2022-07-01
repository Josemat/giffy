import React, { useState } from "react";
import { useLocation } from "wouter";

const BusquedaInput = () => {
  const [busqueda, setBusqueda] = useState("");
  const [location, setLocation] = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${busqueda}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={busqueda || ""}
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
        placeholder="Inserte búsqueda aquí"
        className="inputBusqueda"
      ></input>
      <input type="submit" value={"Buscar"}></input>
    </form>
  );
};

export default BusquedaInput;
