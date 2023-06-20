import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  // const [restaurant, setRestaurant] = useState(null);

  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return <Shimmer />;
  }
  const {
    name,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
    city,
    areaName,
  } = restaurant?.cards[0]?.card?.card?.info;
  return (
    <div className="flex p-2 justify-center shadow-sm  ">
      <div className="mr-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <img className="w-96 p-2" src={CDN_URL + cloudinaryImageId} />
        <h3 className="text-xl">{areaName}</h3>
        <h3 className="text-xl">{city}</h3>
        <h3 className="text-xl">{avgRating}</h3>
        <h3 className="text-xl">{costForTwoMessage}</h3>
      </div>

      <div className="  ml-4 ">
        <h2 className="font-bold p-2  text-xl">Menu</h2>
        <ul className="p-2  ">
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
