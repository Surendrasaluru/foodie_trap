import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ShimmerCard from "./ShimmerCard";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4645819&lng=78.3901853&restaurantId=37102"
    );
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  };
  //const { name, labels } = resInfo?.cards[2].card.card.info;
  console.log(resInfo?.cards[2].card.card.info); //res intro for ref
  console.log(
    resInfo?.cards[2].card.card.info.aggregatedDiscountInfo.descriptionList[0]
      .meta
  );
  //res offers clg for ref

  if (resInfo === null) {
    return <ShimmerCard />;
  }
  return (
    <div>
      <div className="w-1/2 h-40 p-5 rounded-lg border-s-red-500 shadow-2xl place-content-center m-auto">
        <h1 className="text-xl font-semibold">
          {resInfo?.cards[2].card.card.info.name}
        </h1>
        <h2 className="text-base font-medium">
          {resInfo?.cards[2].card.card.info.avgRatingString} (
          {resInfo?.cards[2].card.card.info.totalRatingsString})
          <span> {resInfo?.cards[2].card.card.info.costForTwoMessage}</span>
        </h2>
        <h2 className="text-base font-medium text-orange-500">
          {resInfo?.cards[2].card.card.info.cuisines.join(", ")}
        </h2>
        <h2></h2>

        <h2>
          {resInfo?.cards[2].card.card.info.locality} (
          {resInfo?.cards[2].card.card.info.sla.slaString})
        </h2>
      </div>

      <div className="m-auto w-1/2 p-5 place-content-center">
        <h1 className="font-semibold text-xl m-auto text-left">
          Deals Curated For You...
        </h1>
        <div className=" flex my-2">
          {resInfo?.cards[2].card.card.info.aggregatedDiscountInfo.descriptionList.map(
            (e) => (
              <div className="flex w-1/2 border border-slate-400 rounded-md p-4 mx-2">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/offers/generic"
                  alt=""
                />
                <h1 className="text-lg m-auto font-semibold px-2">{e.meta}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
