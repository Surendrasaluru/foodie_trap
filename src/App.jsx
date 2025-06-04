import Header from "./components/Header";
import Card from "./components/Card";

import Shimmer from "./components/Shimmer";
import { Outlet } from "react-router-dom";
import { RestaurantContainer } from "./components/RestaurantContainer";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <Outlet />
    </div>
  );
};

export default App;
