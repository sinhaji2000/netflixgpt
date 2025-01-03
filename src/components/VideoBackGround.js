import { useEffect } from "react";
import { options } from "../utils/constant";

const VideoBackGround = ({ movie_id }) => {
  const fetchVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/1005331/videos?language=en-US",
      options
    );
    const jsonData = await response.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailor = filterData[0];
    console.log(trailor, " video titlejsonData");
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KS0XacjMmOc?si=o9F6PkOUgzcYRz7Z"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay=True; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
