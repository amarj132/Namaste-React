import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>Cart</li>
    <h1 className="onlinelogin"> {isOnline ? "✅" : "🚫"}</h1>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
