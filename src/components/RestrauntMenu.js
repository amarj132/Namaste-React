import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_API + id);

    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

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
    <div className="menu">
      <div>
        <h2>{name}</h2>
        <img src={CDN_URL + cloudinaryImageId} />
        <h3>{areaName}</h3>
        <h3>{city}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwoMessage}</h3>
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
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
