import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-black flex flex-row justify-between">
      <img
        src="https://cdn-icons-png.flaticon.com/128/3063/3063822.png"
        alt="logo"
        className="w-20 h-15  mx-4 p-2 "
      />

      <ul className="flex flex-row gap-4 justify-evenly text-xl font-semibold place-items-center font-mono py-2 px-4 text-orange-500">
        <Link to="/">
          <li className="mx-8">Home</li>
        </Link>
        <Link to="/help">
          <li className="mx-8">Help</li>
        </Link>
        <Link to="/cart">
          <li className="mx-8">Cart</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
