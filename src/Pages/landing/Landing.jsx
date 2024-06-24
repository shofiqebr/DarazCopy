import {FaShoppingCart} from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import From from "./files/From";
import Title from "../../Components/title/Title";


const Landing = () => {
  return (
    <section className="bg-[#F4F3EA] mt-3 py-5">
        <Title title='Landing'/>
      
      {/* Top Bar Section */}
      <div className="mt-8 mx-auto max-w-screen-xl px-3">
        <h2 className="font-bold text-center text-3xl leading-9	">
             <span className="text-[#F85606] uppercase">Order Yours </span>  <br />
          Before the new edition is finished <br />
          We heartily try to take care of <br /> 
          <span className="text-[#F85606] ml-2">YOUR CHOICE</span> <br />
          We will be happy with your right decision for choosing us 
        </h2>
        <div className="mt-8 text-center"></div>

        <div className="text-center mt-6 border-4 rounded-full md:w-[340px] w-[240px] mx-auto border-[#F85606] hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#F85606] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            Order Now
          </button>
        </div>
        <h1 className="text-[#F85606] font-bold text-3xl text-center mt-8 ">
        This product has a lot of demand for the best  quality it provides and <br /> the natural beauty of it 
        </h1>
      </div>

      {/* আবায়া-ই সাবিহা Section */}
      <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
          <div className="border-2 border-[#F85606]">
            <img src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0106.png.webp" alt="" />
            <p className="text-center font-extrabold p-2">Deep Sea Green Color


            </p>
          </div>
          <div className="border-2 border-[#F85606]">
            <img
              className="border-2"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0102.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">Rose PInk Color</p>
          </div>
          <div className="border-2 border-[#F85606]">
            <img
              className="border-2 "
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0110.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">Black Color</p>
          </div>
          <div className="border-2 border-[#F85606]">
            <img
              className="border-2"
              src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0108.png.webp"
              alt=""
            />
            <p className="text-center font-extrabold p-2">Olive Color</p>
          </div>
        </div>
        <div></div>
      </section>
      {/* Order now section  */}
      <div className="max-w-screen-xl mx-auto p-3 text-center">
        <h1 className="font-bold text-4xl">
          The previous price of this product was
          <span className="relative">
            2500/-
            <svg
              className="w-28 absolute -left-6 top-1 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none">
              <path fill="red" d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"></path>
              <path fill="red" d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"></path>
            </svg>
          </span>
          Taka
        </h1>
        <h1 className="font-bold text-5xl mt-4 text-[#F85606]">
          Today's offer price 
          <span className="relative ml-2 mr-2 text-[#38b000]">
           1940/-
            <svg
              className="w-44 absolute -left-8 -top-[68px] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 150 150"
              preserveAspectRatio="none"></svg>
          </span>
          taka only
        </h1>
        <h2 className="mt-5 text-[#F85606] text-3xl font-bold">
          To get the offer click order now

         
        </h2>
       
      </div>
      {/* card Section */}

      <section className="max-w-screen-xl mt-8 mx-auto p-5">
        <div>
          <div className="md:ml-44">
            <h1 className="font-extrabold text-3xl text-[#F85606]">why choose us</h1>
            <div className="flex items-center gap-2 mt-6">
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
              <p className="h-3 w-6 bg-[#38B000]"></p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>The best service we provide</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>The best service we provide</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>The best service we provide</p>
            </div>
            <div className="mt-6 flex items-center gap-3 font-bold">
              <FaCheckCircle className="text-2xl text-[#38B000]" />
              <p>The best service we provide</p>
            </div>
          </div>
          <div className="text-center mt-8 border-4 rounded-full md:w-[340px] w-[230px] mx-auto border-[#F85606] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
          <button className="font-extrabold  md:px-[85px] px-[32px] bg-[#F85606] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
           Order Now
          </button>
        </div>
        </div>
      </section>
      {/* --------------------- */}
      <section className="bg-[#F4F3EA] text-center mt-8 p-8">
        <div className="md:max-w-screen-xl md:mx-auto">
          <h1 className="text-3xl font-extrabold text-[#F85606]">Whats App 01928 22 77 88</h1>
          <div className="text-center mt-8 border-4 rounded-full md:w-[340px] w-[210px] mx-auto border-[#F85606] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
          <button className="font-extrabold  md:px-[85px] px-[22px] bg-[#F85606] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
           Order Now
          </button>
        </div>
        </div>
      </section>

      {/* React Feom used */}
      <From />
    </section>
  );
};

export default Landing;
