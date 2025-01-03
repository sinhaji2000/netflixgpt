import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (movies === null) {
    return <h1>Loading...</h1>;
  }

  const randomNumber = Math.floor(Math.random() * movies.length);

  const mainMovies = movies[randomNumber];
  const { original_title, overview, id } = mainMovies;

  // console.log(mainMovies, "form mainCOmponents redux store");
  return (
    <div>
      {/* <h1>{mainMovies?.title}</h1> */}
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackGround movie_id={id} />
    </div>
  );
};

export default MainContainer;
