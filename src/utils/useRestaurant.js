import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurant = (id) => {
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

  return restaurant;
};

export default useRestaurant;
