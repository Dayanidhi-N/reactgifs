import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGif } from "../context/GifContext";
import Gifs from "../components/Gifs";
import { FaPaperPlane, FaRegFileCode } from "react-icons/fa";
import { HiMiniHeart } from "react-icons/hi2";

const contentType = ["gifs", "stickers", "texts"];

const GifPage = () => {
  const { type, slug } = useParams();
  const [singleGif, setsingleGif] = useState({});

  const { giphys, favourites, addToFavourites } = useGif();

  const fetchSingleGif = async () => {
    const gifId = slug.split("-");
    const { data } = await giphys.gif(gifId[gifId.length - 1]);

    setsingleGif(data);
  };

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    fetchSingleGif();
  }, []);

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {singleGif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={singleGif?.user?.avatar_url}
                alt={singleGif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font=bold">{singleGif?.user?.display_name}</div>
                <div className="faded-text">@{singleGif?.user?.username}</div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-4">{singleGif.title}</div>
            <Gifs gif={singleGif} hover={false} />

            {/* mobile screen */}
            <div className="flex sm:hidden gap-1">
              <img
                src={singleGif?.user?.avatar_url}
                alt={singleGif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font=bold">{singleGif?.user?.display_name}</div>
                <div className="faded-text">@{singleGif?.user?.username}</div>
              </div>
              <button className="ml-auto">
                <FaPaperPlane size={25} />
              </button>
            </div>
          </div>

          {/* favourites/share/embed */}

          <div className="hidden sm:flex flex-col gap-5 mt-6">
            <button
              onClick={() => addToFavourites(singleGif.id)}
              className="flex gap-5 items-center font-bold text-lg cursor-pointer"
            >
              <HiMiniHeart
                size={30}
                className={`${
                  favourites.includes(singleGif.id) ? "text-red-500" : ""
                }`}
              />
              Favorite
            </button>
            <button className="flex gap-6 items-center font-bold text-lg">
              <FaPaperPlane size={26} />
              Share
            </button>

            <button className="flex gap-5 items-center font-bold text-lg">
              <FaRegFileCode size={26} />
              Embed
            </button>
          </div>
        </div>

        <div className="">
          <span className="font-extrabold"></span>
        </div>
      </div>
    </div>
  );
};

export default GifPage;
