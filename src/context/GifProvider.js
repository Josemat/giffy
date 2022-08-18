import React, { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifURL, setGifURL] = useState("");
  return (
    <GifContext.Provider
      value={{
        gifURL,
        setGifURL,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
export { GifProvider };

export default GifContext;
