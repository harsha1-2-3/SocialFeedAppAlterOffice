import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

import "./index.css";

const ProfilePage = () => (
  <>
    <div className="bg-profile">
      <div className="profile-page-top">
        <Link to="/feeds-home">
          <button className="arrow-btn">
            <FaArrowLeft className="arrow" />
          </button>
        </Link>
      </div>
      <div className="profile-img-cont">
        <img
          className="profile-big-img"
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1734000899/1bc60f4364d82c6a06c4a77468ec75cf_y3h2id.png"
          alt="img"
        />
        <button className="edit-btn">Edit Profile</button>
      </div>
      <h1 className="profile-name">Sakshi Agarwal</h1>
      <p className="profile-name-para">
        Just someone who loves designing, sketching, and finding beauty in the
        little things 💕
      </p>
      <h1 className="myposts-head">My Posts</h1>
      <div className="myposts-cont">
        <div className="myposts-imgs-cont">
          <div className="myposts-1">
            <h1 className="myposts-1-small">1/2</h1>
            <div className="myposts-1-text">
              <h1 className="myposts-1-head">Design meet</h1>
              <p className="myposts-1-para">
                <FaHeart />
                67
              </p>
            </div>
          </div>
          <div className="myposts-2">
            <div className="myposts-1-text">
              <h1 className="myposts-1-head">Parachute ❤️</h1>
              <p className="myposts-1-para">
                <FaHeart />
                65
              </p>
            </div>
          </div>
        </div>
        <div className="myposts-3">
          <div className="myposts-3-text">
            <h1 className="myposts-1-head">Working on B2B...</h1>
            <p className="myposts-1-para">
              <FaHeart />
              40
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProfilePage;
