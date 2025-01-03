const VideoTitle = ({ original_title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <p className="text-6xl font-bold">{original_title}</p>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex gap-4">
        <button className="bg-gray-500 text-black p-4 px-16 text-lg">
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
