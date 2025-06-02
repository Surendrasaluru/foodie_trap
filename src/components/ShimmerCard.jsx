const ShimmerCard = () => {
  return (
    <div className="w-80 pb-2  bg-gray-100 mx-7 hover:bg-gray-200 shadow-sm shadow-black text-left rounded-lg ">
      <div className="relative">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png"
          alt="resimage"
          className="h-44 w-[75%] rounded-md mb-2 blur-lg "
        />
      </div>
      <h1 className="text-black font-semibold text-lg mx-2"></h1>
      <h2 className="text-gray-800 font-semibold mx-2"></h2>
      <div className="flex gap-2 mx-2 h-40 blur-md bg-gray-100">
        <p></p>
      </div>

      <h2 className="mx-2"></h2>
    </div>
  );
};

export default ShimmerCard;
