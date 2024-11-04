import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <header>
          <Header />
        </header>
        <div className="flex flex-row w-full">
          <SideBar />
          <Detail />
        </div>
      </div>
    </>
  );
}

export default App;
