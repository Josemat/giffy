import { useContext } from "react";
import GifContext from "../context/GifProvider";

const useGif = () => {
  return useContext(GifContext);
};

export default useGif;
