import { useSelector } from "react-redux";
import useMovieTraoler from "../hooks/useMovieTrailor";

const VideoBackGround = ({ movie_id }) => {
  const trailorVideo = useSelector((store) => store.movie?.trailorVideo);

  useMovieTraoler(movie_id);

  if (!trailorVideo?.key) {
    return <div>Loading video...</div>;
  }

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailorVideo.key}?autoplay=1&mute=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
