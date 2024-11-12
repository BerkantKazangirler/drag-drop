import { SideBar } from "./SideBar";
import Overview from "../pages/Overview";
import Header from "./Header";
import { useState } from "react";

export const Layout = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex flex-col">
      <header>
        <Header collapse={() => setCollapse((t) => !t)} />
      </header>
      <div className="flex flex-row w-full">
        <SideBar collapse={collapse} />
        <Overview />
      </div>
    </div>
  );
};
