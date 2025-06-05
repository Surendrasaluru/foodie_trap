import Header from "./components/Header";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />

      <Outlet />
    </div>
  );
};

export default App;
