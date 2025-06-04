import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
export const RestaurantContainer = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4645819&lng=78.3901853&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    /*console.log(
        json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
      );*/
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center ">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="What's On Your Mind"
          className="bg-white w-80 border rounded-md rounded-l-full border-black border-right-none p-4  text-left  h-10"
        ></input>
        <button
          onClick={() => {
            console.log(searchText);
            const filteredSearchResList = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResList(filteredSearchResList);
          }}
          className="bg-green-600 text-white py-2 px-3 text-center w-30 border-l-0 h-10 rounded-md rounded-r-full"
        >
          Search
        </button>
        <button
          className="bg-green-600 text-white py-2 px-3 w-30 mx-20 rounded-md"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          Show All
        </button>
      </div>

      <div className="m-3 grid grid-cols-3 gap-3 justify-items-center">
        {filteredResList.map((restaurant) => (
          <Card resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
