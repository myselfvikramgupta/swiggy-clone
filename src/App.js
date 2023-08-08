import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-300 w-full h-full  font-Poppins">
      <Header />
      <div className="container m-auto pt-24 pl-5 pr-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
