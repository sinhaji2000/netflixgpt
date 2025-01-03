import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { TMDB_NOWPLAYING_URL } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayinhMovies = async () => {
    const moviesList = await fetch(TMDB_NOWPLAYING_URL, options);
    const jsonData = await moviesList.json();
    dispatch(addNowPlayingMovie(jsonData.results));

    // console.log(jsonData);
  };
  useEffect(() => {
    getNowPlayinhMovies();
  }, []);
};

export default useNowPlayingMovies;
