import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTrailorVideo } from "../utils/movieSlice";

const useMovieTraoler = (movie_id) => {
  const dispatch = useDispatch();

  const fetchVideo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      options
    );
    const jsonData = await response.json();

    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(filterData);
    const trailor = filterData[0];
    dispatch(addTrailorVideo(trailor));
  };
  useEffect(() => {
    fetchVideo();
  }, []);
};

export default useMovieTraoler;
