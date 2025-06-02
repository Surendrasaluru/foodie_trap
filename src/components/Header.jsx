const Header = () => {
  return (
    <div className="text-black flex flex-row justify-between">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png"
        alt="logo"
        className="w-20 h-15  mx-4 p-2 "
      />

      <ul className="flex flex-row gap-4 justify-evenly text-xl font-semibold place-items-center font-mono py-2 px-4 text-orange-500">
        <li className="mx-8">Home</li>
        <li className="mx-8">Help</li>
        <li className="mx-8">Cart</li>
      </ul>
    </div>
  );
};
export default Header;
