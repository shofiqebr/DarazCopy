import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import flashImg from '../../assets/flashcard.jpg'

const FlashSaleCard = () => {
  const [groups, setGroups] = useState([]);

  // const data = [
  //   {
  //     name: "Smartphone XYZ",
  //     image: "https://i.ibb.co/myzJyqp/b2bef0e2bd33e7e2b146f5ba639d863b.jpg",
  //     price: 799,
  //     discount_percentage: 15,
  //   },
  //   {
  //     name: "Laptop ABC",
  //     image: "https://i.ibb.co/tD6tSVv/b41c2b4ff18f044f6c578a4b36e3da7b.jpg",
  //     price: 1199,
  //     discount_percentage: 10,
  //   },
  //   {
  //     name: "Wireless Earbuds",
  //     image: "https://i.ibb.co/myzJyqp/b2bef0e2bd33e7e2b146f5ba639d863b.jpg",
  //     price: 199,
  //     discount_percentage: 20,
  //   },
  //   {
  //     name: "Smartwatch 123",
  //     image: "https://i.ibb.co/myzJyqp/b2bef0e2bd33e7e2b146f5ba639d863b.jpg",
  //     price: 249,
  //     discount_percentage: 25,
  //   },
  //   {
  //     name: "4K Television",
  //     image: "https://i.ibb.co/myzJyqp/b2bef0e2bd33e7e2b146f5ba639d863b.jpg",
  //     price: 1499,
  //     discount_percentage: 30,
  //   },
  //   {
  //     name: "Gaming Console",
  //     image: "https://i.ibb.co/myzJyqp/b2bef0e2bd33e7e2b146f5ba639d863b.jpg",
  //     price: 499.99,
  //     discount_percentage: 5,
  //   },
  // ];

  useEffect(() => {
    fetch(
      `https://erpmethods.vercel.app/gets/Item Group?filters=[["show_in_website", "=", 1]]&fields=["idx","route","name", "image"]`,
      {
        headers: {
          url: "https://ecommerce.ionicerp.xyz/",
          api_secret: "f4393c419474a1b",
          api_key: "84859bedced40f4",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);



  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-4 ">


  <Link to='/product'>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    </Link>


    
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>
    <div>
      <img src={flashImg} alt="" />
      <p className="text-xl">1 set light luxury four leaf clover pendent</p>
      <p className="text-red-400 flex  items-center"><TbCurrencyTaka /> 268</p>
      <div className="flex">
        <del className="flex justify-center items-center"><TbCurrencyTaka /> 417</del>
        <p>-35%</p>
      </div>
    </div>











      {groups?.map((item, id) => {
        return (
          <Link to="/details" className="hover:shadow hover:border" key={id}>
            <img className="w-full lg:w-96 " src={`https://ecommerce.ionicerp.xyz${item.image}`} alt="" />
            <div className="p-3">
              <p>{item.name}</p>
              <p className="flex items-center text-[#ff6801] text-[17px]">
                <TbCurrencyTaka />
                {/* {item.price} */}
              </p>
              {/* <p className="text-sm">
                <del className="text-[#9e9e9e]">{item.discount_percentage % item.price}</del>{" "}
                {item.discount_percentage + item.price} %
              </p> */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FlashSaleCard;
