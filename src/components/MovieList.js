import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-2 ">
      {/* Title */}
      <h1 className="text-black text-2xl font-bold mb-4 text-white  ">
        {title}
      </h1>

      {/* Horizontally Scrolling Movie Cards */}
      <div className="flex overflow-x-scroll ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
