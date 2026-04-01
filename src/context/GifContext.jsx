import React, { createContext, useContext, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { API_KEY } from "../config/env";

const GifContext = createContext();
const giphys = new GiphyFetch(API_KEY);

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (id) => {
    if (favourites.includes(id)) {
      const updatedFavourites = favourites.filter((itemId) => itemId !== id);
      localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites);
    } else {
      const updatedFavourites = [...favourites];
      updatedFavourites.push(id);
      localStorage.setItem("favouriteGIFs", JSON.stringify(updatedFavourites));
      setFavourites(updatedFavourites);
    }
  };

  useEffect(() => {
    const localFavourite =
      JSON.parse(localStorage.getItem("favouriteGIFs")) || [];
    setFavourites(localFavourite);
  }, []);

  return (
    <GifContext.Provider
      value={{
        giphys,
        gifs,
        setGifs,
        favourites,
        filter,
        setFilter,
        addToFavourites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const useGif = () => useContext(GifContext);

export default GifProvider;
