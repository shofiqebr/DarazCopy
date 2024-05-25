import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Footer2 from "./Pages/Footer/Footer2";

const Root = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar />
      <Outlet />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Root;
