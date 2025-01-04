import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  console.log(poster_path, "movie card");

  return (
    <div className="w-40 flex-shrink-0">
      {poster_path ? (
        <img
          alt="poster"
          src={IMAGE_URL + poster_path}
          className="w-36 h-auto rounded-lg shadow-lg object-contain"
        />
      ) : (
        <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
          No Poster
        </div>
      )}
    </div>
  );
};

export default MovieCard;
