import { CDN_URL } from "../utils/constants";
const Card = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    locality,
    aggregatedDiscountInfoV3,

    areaName,
  } = resData.info;
  return (
    <div className="w-80 pb-2  bg-gray-100 mx-7 hover:bg-gray-200 shadow-sm shadow-black text-left rounded-lg ">
      <div className="relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="resimage"
          className="h-44 w-full rounded-md mb-2 "
        />
        <div className="absolute  text-shadow-lg text-shadow-black text-white text-2xl font-bold inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent">
          <h2>
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </h2>
        </div>
      </div>
      <h1 className="text-black font-semibold text-lg mx-2">{name}</h1>
      <h2 className="text-gray-800 font-semibold mx-2">
        {cuisines.join(", ")}
      </h2>
      <div className="flex gap-2 mx-2">
        <p> ⭐{avgRating}</p>
        <p> ⏱️{resData?.info?.sla?.slaString}</p>
      </div>

      <h2 className="mx-2">
        {locality}, {areaName}
      </h2>
    </div>
  );
};
export default Card;
