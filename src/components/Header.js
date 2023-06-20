import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2 " src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex justify-between py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      <div className="flex">
      <h1 className="py-10 px-2"> {isOnline ? "✅" : "🚫"}</h1>
      <button
        className=" px-2"
        onClick={() => {
          btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
        }}
      >
        {btnNameReact}
      </button>
      </div>
    </div>
  );
};

export default Header;
