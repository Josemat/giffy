import React, { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifURL, setGifURL] = useState("");
  if (gifURL) localStorage.setItem("gifURL", gifURL);
  if (!localStorage.getItem("gifURL")) localStorage.setItem("gifURL", gifURL);
  console.log(gifURL);
  console.log(localStorage.getItem("gifURL"));
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
