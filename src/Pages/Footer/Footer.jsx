import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="mt-12 max-w-screen-xl mx-auto px-4 pb-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <h1 className="text-[18px] font-semibold text-[#ff6801]">
            Customer Care
          </h1>
          <ul className="mt-2">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>CCMS - Central Complain Management System</li>
          </ul>
          <div className="mt-8">
            <h1 className="text-[18px] font-semibold text-[#ff6801]">
              Earn With Daraz
            </h1>
            <ul className="mt-3">
              <li>Daraz University</li>
              <li>Sell on Daraz</li>
              <li>Code of Conduct</li>
              <li>Join the Daraz Affiliate Program</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-semibold text-[#ff6801]">Daraz</h1>
          <ul className="mt-2">
            <li>About Daraz</li>
            <li>Digital Payments</li>
            <li>Daraz Card</li>
            <li>Daraz Blog</li>
            <li>Daraz Cares</li>
            <li>Daraz Mart</li>
            <li>Privacy Policy</li>
            <li>Daraz App</li>
            <li>Daraz Exclusives</li>
            <li>Daraz Donates</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] font-semibold text-[#ff6801]">
            Daraz International
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <img
                className="w-10"
                src="https://i.ibb.co/G5tmfPV/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                alt=""
              />
              <p>Pakistan</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10"
                src="https://i.ibb.co/G5tmfPV/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                alt=""
              />
              <p>Pakistan</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10"
                src="https://i.ibb.co/G5tmfPV/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                alt=""
              />
              <p>Pakistan</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10"
                src="https://i.ibb.co/G5tmfPV/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                alt=""
              />
              <p>Pakistan</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-10"
                src="https://i.ibb.co/G5tmfPV/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                alt=""
              />
              <p>Pakistan</p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="text-[18px] font-semibold text-[#ff6801]">
              Payment Methods
            </h1>
            <img
              className="w-44 mt-6"
              src="https://i.postimg.cc/5N1SdxkL/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
              alt=""
            />
          </div>
          <div className="">
            <div className="mt-6 flex gap-5">
              <div>
                <h1 className="text-[18px] font-semibold text-[#ff6801]">
                  Verified by
                </h1>
                <img
                  className="w-24"
                  src="https://i.postimg.cc/mkVzGGty/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[18px] font-semibold text-[#ff6801]">
                  DBID
                </h1>
                <p className="text-sm mt-3">
                  Registration ID : <br /> 304903094
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] font-semibold text-[#ff6801]">
            Exclusive Deals and Offers!
          </h1>
          <div>
            <img
              src="https://i.ibb.co/7JfKdPB/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053-1.png"
              alt=""
            />
          </div>
          <div className="p-4 text-center">
            <img
              className="w-44"
              src="https://i.postimg.cc/KvZ8hV7R/O1-CN015pbohf1gx-JXl8-J4xa-6000000004208-2-tps-1947-1053.png"
              alt=""
            />
            <p className="text-sm -ml-16 -mt-2">Download App</p>
          </div>
          <div className="mt-8">
            <h1 className="text-[18px] font-semibold text-[#ff6801]">
              Follow Us
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaFacebook className="text-3xl text-[#3273de]" />
            <TbWorld className="text-3xl text-[#ff6801]" />
            <FaYoutube className="text-3xl text-red-500" />
            <FaTwitter className="text-3xl text-[#479be9]" />
            <FaInstagramSquare className="text-3xl text-[#e83d7b]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
