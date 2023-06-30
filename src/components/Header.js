import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const isOnline = useOnline();
  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <div className="logo-container">
        <img data-testid= "logo" className="h-28 p-2 " src={LOGO_URL} />
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
          <Link to="/cart" >
          <li className="px-2" data-testid = "cart">Cart {cartItems.length} </li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <h1 data-testid='online-status' className="py-10 px-2"> {isOnline ?"✅" : "🚫"}</h1>
        <span className="py-10 px-2 text-red-900">{user.name}</span>
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
