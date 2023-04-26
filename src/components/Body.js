import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurant) {
  const filterData = restaurant.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  //Local state variable - Super powerfull variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredListRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6344254&lng=73.7409321&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredListRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurant) return null;
  if (filteredRestaurant?.length === 0) return <h1> NO Restaurant Found</h1>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredListRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        {/* <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              //filter logic
              const filterList = listofRestaurant.filter(
                (res) => res.data.avgRating > 4
              );
              setListofRestaurant(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div> */}

        <div className="res-container">
          {filteredRestaurant?.map((restaurant) => (
            <RestaurantCard key={restaurant?.data?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
