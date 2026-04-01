import React, { useState, useEffect } from "react";
import Gifs from "../components/Gifs";
import { useGif } from "../context/GifContext";

const Favourites = () => {
  const [favoriteGIFs, setfavoriteGIFs] = useState([]);
  const { giphys, favourites } = useGif();

  const fetchFavorites = async () => {
    const { data: gifs } = await giphys.gifs(favourites);
    setfavoriteGIFs(gifs);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="mt-2">
      <span className="faded-text">My Favourites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-2">
        {favoriteGIFs.map((gif) => {
          return <Gifs gif={gif} key={gif.id}></Gifs>;
        })}
      </div>
    </div>
  );
};

export default Favourites;
