import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./index.css";

const LoginPage = () => (
  <>
    <div className="bg-login">
      <div className="photos-cont">
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979732/226326267c072588ee5d44a348cf48de_ha3t66.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979721/5beb7e681006f103fc15c10cf78c95a6_kdlyxe.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733976143/66c9da0774bf0b45b020839469eb9db2_cbk0hw.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979617/49a959926bc560b46056df7c41a10eca_ybzqnw.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979628/0c89da65a004e4f412a86eb5cde33adb_1_mejej3.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979640/8b0532ff490cf1da3f105bff7ab9f284_idde6f.png"
          alt="img"
          className="login-img-1"
        />
        <img
          src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733979700/cbee766eb05d851754d1499048b6e390_epotq4.png"
          alt="img"
          className="login-img-1"
        />
      </div>
      <div className="login-card">
        <h1 className="login-card-head">
          <img
            className="feed-logo"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1733977971/2de875e6142d3dde26f7cea380c77837_1_fsk8px.svg"
            alt="logo"
          />
          Vibesnap
        </h1>
        <p className="login-card-para">Moments That Matter, Shared Forever.</p>
        <Link className="link" to="/feeds-home">
          <button className="login-card-btn">
            <FcGoogle className="google-logo" /> Continue with Google
          </button>
        </Link>
      </div>
    </div>
  </>
);
export default LoginPage;
