import { useGif } from "../context/GifContext";
import { useEffect } from "react";
import Gifs from "../components/Gifs";
import FilterGif from "../components/FilterGif";

const Home = () => {
  const { giphys, gifs, setGifs, filter } = useGif();

  const fetchTrendingGifs = async () => {
    const { data } = await giphys.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };
  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />
      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
        {gifs.map((gif) => {
          return <Gifs gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
