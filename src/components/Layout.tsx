import { Header } from "./Header";
import { SideBar } from "./SideBar";
import Overview from "../pages/Overview";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <header>
        <Header />
      </header>
      <div className="flex flex-row w-full">
        <SideBar collapse={true} />
        <Overview />
      </div>
    </div>
  );
};
