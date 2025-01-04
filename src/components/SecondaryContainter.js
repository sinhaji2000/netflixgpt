import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className=" p-16 bg-black  -mt-32relative z-20">
      <MovieList
        title={"Now Playing"}
        movies={movies.nowPlayingMovie}
        className="pb-9  text-white"
      />
      <MovieList title={"trending"} movies={movies.nowPlayingMovie} />
      <MovieList title={"popular"} movies={movies.nowPlayingMovie} />
    </div>
  );
};

export default SecondaryContainer;
