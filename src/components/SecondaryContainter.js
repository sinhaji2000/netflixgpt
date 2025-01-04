
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className=" bg-black p-16">
      <div className="-mt-56 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"trending"} movies={movies.nowPlayingMovie} />
        <MovieList title={"popular"} movies={movies.nowPlayingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
