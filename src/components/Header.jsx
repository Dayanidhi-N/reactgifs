import React from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGif } from "../context/GifContext";
import { API_KEY } from "../config/env";
import GifSearch from "./GifSearch";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [loading, setLoading] = useState(false);

  const { gifs, setGifs, favourites } = useGif();

  // fetch categories with fetch (no SDK method for this)
  const fetchGifCategories = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`,
      );
      if (!response.ok) {
        throw new Error("API Error");
      }
      const { data } = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" alt="Giphy Logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <div className="font-bold text-md flex gap-2 items-center">
          {/*categories*/}
          {categories?.slice(0, 5)?.map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {category.name}
              </Link>
            );
          })}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block cursor-pointer`}
            />
          </button>

          {favourites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 rounded cursor-pointer">
              <Link to="/favourites"> Favourite GIFs</Link>
            </div>
          )}

          <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>

        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {categories?.map((category) => {
                return (
                  <Link
                    key={category.name}
                    to={`/${category.name_encoded}`}
                    className="font-bold"
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/*search*/}
      <GifSearch />
    </nav>
  );
};

export default Header;
