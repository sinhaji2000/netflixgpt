const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute bg-gradient-to-r from-black">
      <p className="text-6xl font-bold text-white  whitespace-nowrap">
        {original_title}
      </p>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-gray-500 text-black p-4 px-16 text-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-black p-4 px-16 text-lg">
          Info :
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
