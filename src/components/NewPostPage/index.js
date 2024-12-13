import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import "./index.css";

const NewPostPage = () => (
  <>
    <div className="bg-newpost">
      <Link to="/feeds-home">
        <button className="newpost-head-btn">
          <FaArrowLeft className="arrow-left" />
          New Post
        </button>
      </Link>
      <textarea
        rows="11"
        cols="35"
        placeholder="What's on your mind?"
        className="newpost-text"
      ></textarea>
      <div className="inputs-btn-cont">
        <button className="inputs-btn">
          <FaImages className="input-icon-photos" />
          Photos
        </button>
        <button className="inputs-btn">
          <FaVideo className="input-icon-videos" />
          Videos
        </button>
        <button className="inputs-btn">
          <FaCamera className="input-icon-camera" />
          Camera
        </button>
      </div>
      <Link to="/feeds-home">
        <button className="create-newpost-btn">CREATE</button>
      </Link>
    </div>
  </>
);
export default NewPostPage;
