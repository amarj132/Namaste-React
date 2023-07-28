import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {user} = useContext(UserContext)

  const {
    deliveryTime,
    costForTwo,
    avgRating,
    cuisines,
    name,
    cloudinaryImageId,
  } = resData;

  return (
    <div className="w-48 bg-pink-50 p-2 m-2 shadow-lg">
      <img
        className="w-48 p-1 m-1"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
      <h5 className="font-bold">{user.name} - {user.email}</h5>
    </div>
  );
};

export default RestaurantCard;
