import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import {
  FaHeart,
  FaPaperPlane,
  FaTwitter,
  FaFacebook,
  FaReddit,
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaFacebookMessenger,
  FaClone,
} from "react-icons/fa";
import "./index.css";
import { FaCirclePlay } from "react-icons/fa6";

const FeedsHomePage = () => (
  <>
    <div className="bg-feeds">
      <div className="profile-cont">
        <Link to="/profile-page">
          <button className="profile-btn">
            <img
              className="profile-img"
              src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733980658/Menu_gltonj.svg"
              alt="profile-img"
            />
          </button>
        </Link>
        <div className="profile-text">
          <p className="profile-para">Welcome Back,</p>
          <h1 className="profile-head">Sakshi Agarwal</h1>
        </div>
      </div>
      <div className="feeds-cont">
        <h1 className="feeds-head">Feeds</h1>
        <ul className="feeds-ul">
          <li className="feeds-li">
            <div className="feeds-li-profile-cont">
              <img
                className="feeds-li-profile-img"
                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733982954/190827f1ce162e34d0abc23432ee8cc0_q0ghmh.svg"
                alt="profile-img"
              />
              <div className="profile-text">
                <h1 className="feeds-li-profile-head">Aarav</h1>
                <p className="feeds-li-profile-para">2 hours ago</p>
              </div>
            </div>
            <p className="feeds-li-para">
              Just arrived in New York City! Excited to explore the sights,
              sounds, and energy of this amazing place. 🗽{" "}
              <span className="tags">#NYC #Travel</span>
            </p>
            <div className="feeds-imgs-cont">
              <img
                className="feeds-img"
                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733983676/928a35f9b5cd9a061345a963eac4c291_lvu1dm.png"
                alt="feeds-img-1"
              />
              <img
                className="feeds-img"
                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733983658/12fc6f33fc47fc8d4a9d3acbba557882_aehxih.png"
                alt="feeds-img-1"
              />
            </div>
            <div className="share-cont">
              <p className="likes-para">
                <FaHeart />
                67
              </p>

              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <button className="share-btn">
                      <FaPaperPlane />
                      Share
                    </button>
                  }
                >
                  {(close) => (
                    <>
                      <div className="share-popup-cont">
                        <div className="popup-head-cont">
                          <h1 className="popup-head">Share Post</h1>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="popup-close"
                          >
                            X
                          </button>
                        </div>
                        <ul className="popup-ul">
                          <li className="popup-li">
                            <div className="icon-cont twitter">
                              <FaTwitter className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Twitter</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont facebook">
                              <FaFacebook className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Facebook</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont reddit">
                              <FaReddit className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Reddit</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont discord">
                              <FaDiscord className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Discord</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont whatsapp">
                              <FaWhatsapp className="popup-icon" />
                            </div>
                            <p className="popup-li-para">WhatsApp</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont messenger">
                              <FaFacebookMessenger className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Messanger</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont telegram">
                              <FaTelegram className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Telegram</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont instagram">
                              <FaInstagram className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Instagram</p>
                          </li>
                        </ul>
                        <h1 className="popup-li-head">Page Link</h1>
                        <div className="popup-link-cont">
                          <input className="popup-input" type="text" />
                          <FaClone className="paste-icon" />
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          </li>
          <li className="feeds-li-1">
            <div className="feeds-li-profile-cont">
              <img
                className="feeds-li-profile-img"
                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733986395/2e2cfd03cc1c628062b688b32e6688a5_wylfxt.svg"
                alt="profile-img"
              />
              <div className="profile-text">
                <h1 className="feeds-li-profile-head">Sneha</h1>
                <p className="feeds-li-profile-para">1 day ago</p>
              </div>
            </div>
            <p className="feeds-li-para">
              Taking a moment to slow down, breathe, and focus on myself. 🌿✨
              Self-care isn’t selfish – it’s necessary.
              <span className="tags">#SelfCare #MeTime #Wellnes </span>
            </p>
            <div className="feeds-imgs-cont-1">
              <FaCirclePlay className="play-icon" />
            </div>
            <div className="share-cont">
              <p className="likes-para">
                <FaHeart />
                70
              </p>
              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <button className="share-btn">
                      <FaPaperPlane />
                      Share
                    </button>
                  }
                >
                  {(close) => (
                    <>
                      <div className="share-popup-cont">
                        <div className="popup-head-cont">
                          <h1 className="popup-head">Share Post</h1>
                          <button
                            type="button"
                            onClick={() => close()}
                            className="popup-close"
                          >
                            X
                          </button>
                        </div>
                        <ul className="popup-ul">
                          <li className="popup-li">
                            <div className="icon-cont twitter">
                              <FaTwitter className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Twitter</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont facebook">
                              <FaFacebook className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Facebook</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont reddit">
                              <FaReddit className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Reddit</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont discord">
                              <FaDiscord className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Discord</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont whatsapp">
                              <FaWhatsapp className="popup-icon" />
                            </div>
                            <p className="popup-li-para">WhatsApp</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont messenger">
                              <FaFacebookMessenger className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Messanger</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont telegram">
                              <FaTelegram className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Telegram</p>
                          </li>
                          <li className="popup-li">
                            <div className="icon-cont instagram">
                              <FaInstagram className="popup-icon" />
                            </div>
                            <p className="popup-li-para">Instagram</p>
                          </li>
                        </ul>
                        <h1 className="popup-li-head">Page Link</h1>
                        <div className="popup-link-cont">
                          <input className="popup-input" type="text" />
                          <FaClone className="paste-icon" />
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              </div>
            </div>
          </li>
        </ul>
        <Link to="/new-post">
          <button className="create-btn">+</button>
        </Link>
      </div>
    </div>
  </>
);

export default FeedsHomePage;
