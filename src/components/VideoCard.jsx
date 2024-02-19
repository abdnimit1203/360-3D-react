import video from "../assets/video.json";
import sea from "../assets/sea.mp4";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const VideoCard = () => {
  const options = {
    style: "decimal", // Other options: 'currency', 'percent', etc.
  };
  // console.log(video);
  return (
    <div className="grid grid-cols-2 ">
      {/* CARDS IMAGE */}
      <div className="card max-w-80 bg-base-100 shadow-xl ">
        <figure className="relative">
          <img src={video?.thumbnail} alt={video?.title} />
          <p className="absolute bg-[#111111cc] text-white p-1 rounded-xl bottom-0 end-0 m-2">
              <MdOutlineWatchLater className="inline opacity-50 " />{" "}
              {video?.duration}
            </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{video?.title}</h2>
          <p>By: {video?.author}</p>

          <p className="line-clamp-3">{video?.description}</p>
       
          <div>
            <p>
              <FaEye className="inline opacity-50" />{" "}
              {video?.views.toLocaleString("en-US", options)}
            </p>
            <p>
              <BiSolidLike className="inline opacity-50" />{" "}
              {video?.likes.toLocaleString("en-US", options)}
            </p>
            <p>
              <BiSolidDislike className="inline opacity-50" />{" "}
              {video?.dislikes.toLocaleString("en-US", options)}
            </p>
           
            <p>
              <SlCalender className="inline opacity-50" />{" "}
              {new Date(video?.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      {/* CARDS VIDEO */}
      <div className="card max-w-80 bg-base-100 shadow-xl ">
        <figure className="relative">
          <video src={sea} controls ></video>
          <p className="absolute bg-[#111111cc] text-white p-1 rounded-xl bottom-0 end-0 m-2">
              <MdOutlineWatchLater className="inline opacity-50 " />{" "}
              {video?.duration}
            </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{video?.title}</h2>
          <p>By: {video?.author}</p>

          <p className="line-clamp-3">{video?.description}</p>
       
          <div>
            <p>
              <FaEye className="inline opacity-50" />{" "}
              {video?.views.toLocaleString("en-US", options)}
            </p>
            <p>
              <BiSolidLike className="inline opacity-50" />{" "}
              {video?.likes.toLocaleString("en-US", options)}
            </p>
            <p>
              <BiSolidDislike className="inline opacity-50" />{" "}
              {video?.dislikes.toLocaleString("en-US", options)}
            </p>
           
            <p>
              <SlCalender className="inline opacity-50" />{" "}
              {new Date(video?.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
