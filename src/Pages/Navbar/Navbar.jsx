import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#f85606]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="md:flex hidden flex-col md:flex-row gap-3 pt-3 md:pt-0 justify-between items-center">
          <div className="flex items-center gap-3">
            <Link className="text-[14px] text-white hover:text-[#ffffffcb] font-medium">
              Become a seller
            </Link>
            <Link className="text-[14px] text-white font-medium hover:text-[#ffffffcb]">
              {" "}
              Daraz Donates
            </Link>
            <Link className="text-[14px] text-white font-medium hover:text-[#ffffffcb]">
              {" "}
              Help & Support
            </Link>
          </div>

          <div className="flex items-center gap-3 bg-[#ad3c04] rounded-lg p-1">
            <img
              className="w-5"
              src="https://i.ibb.co/YRph0vg/O1-CN01-Ie2-Yn-K1-Jm-Z1m-L3f-Y5-6000000001071-2-tps-60-60.png"
              alt=""
            />
            <p className="text-[14px] text-white font-semibold hover:text-[#ffffffcb]">
              Save More on App
            </p>
          </div>
        </div>
        {/* start Dataz Photo Navbar */}
        <div className="p-2 flex  flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-5">
            <Link to="/">
              <img
                className="w-36 hidden lg:block"
                src="https://i.ibb.co/P18jcD0/3ac46ea5-a376-41cc-981f-21fa690468c0.png"
                alt=""
              />
            </Link>
            <div className="relative">
              <input
                id="id-s03"
                type="search"
                name="id-s03"
                placeholder="Search in Daraz"
                aria-label="Search content"
                className="lg:w-[500px] md:w-[500px] w-[300px] peer font-semibold relative h-10 rounded-xl border px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none border-none  invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <div className="absolute top-1 right-3 bg-[#ffe1d2] px-3 rounded-md py-1">
                <IoSearchSharp className="text-2xl text-[#f85606]" />
              </div>
            </div>
          </div>
          <div className="flex justify-center  items-center md:p-0 rounded-md">
            <Link to="/login" className="flex items-center text-white gap-1 hover:bg-[#ad3c04bb] rounded-xl py-2 px-4">
              <CiUser className="text-xl" />
              <button>Login</button>
            </Link>
            <p className="text-white">|</p>
            <Link to="/register" className="flex items-center text-white gap-1 hover:bg-[#ad3c04bb] rounded-xl py-2 px-4">
              <button>SingUp</button>
            </Link>
            <p className="text-white">|</p>
            <div className="lg:flex items-center hidden gap-2 hover:bg-[#ad3c04bb] rounded-xl py-2 px-4">
              <TfiWorld className="text-xl text-white" />
              <select className="block w-12 text-sm font-medium transition duration-75 border border-none rounded-lg shadow-sm h-8 focus:border-blue-600 focus:ring-inset focus:ring-blue-600 bg-none">
                <option value="EN">EN</option>
                <option value="BN">BN</option>
              </select>
            </div>
            <p className="text-white">|</p>
            <div className="flex items-center text-white gap-1 hover:bg-[#ad3c04bb] rounded-md py-2 px-4">
              <Link to="/addToCard">
                <BsCart className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
