import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

import UserContext from "../utils/UserContext";

const Body = () => {
  //Local state variable - Super powerfull variable
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredListRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6344254&lng=73.7409321&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredListRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>offline,please check your internet connection!!</h1>;
  }

  if (!allRestaurant) return null;
  // if (filteredRestaurant?.length === 0) return <h1> NO Restaurant Found</h1>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="p-3 bg-pink-50 mt-5 mb-3">
          <input
            type="text"
            className="focus:bg-green-200 h-8 p-1"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="p-2 m-2 bg-purple-400 hover:bg-purple-700 text-white rounded-md"
            onClick={() => {
              const data = filterData(searchText, allRestaurant);
              setFilteredListRestaurant(data);
            }}
          >
            Search
          </button>
          <input
            value={user.name}
            onChange={(e) =>
              setUser({
                name: e.target.value,
                email: "aj@gmail.com",
              })
            }
          ></input>
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

        <div className="flex flex-wrap " data-testid="res-list">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              className="link"
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              {" "}
              <RestaurantCard resData={restaurant?.info} />{" "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
