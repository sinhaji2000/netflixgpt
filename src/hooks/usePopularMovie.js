import { useDispatch } from "react-redux";
import { use, useEffect } from "react";
import { addPopularMovie } from "../utils/movieSlice";
import { options } from "../utils/constant";
import { TMDB_POPULAR_URL } from "../utils/constant";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const moviesList = await fetch(TMDB_POPULAR_URL, options);
    console.log(moviesList, "moviesList");
    const jsonData = await moviesList.json();
    console.log(jsonData, "jsonData");
    dispatch(addPopularMovie(jsonData.results));

    // console.log(jsonData);
  };
  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
