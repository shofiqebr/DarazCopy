/* eslint-disable react/prop-types */
import { TbCurrencyTaka } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";

const JustForYouCard = ({ card }) => {
  const { image, name, price, percentage, rating } = card || {};
  return (
    <div className="bg-white hover:shadow hover:border cursor-pointer rounded">
      <img src={image} alt="" />
      <div className="p-3 space-y-1">
        <h1 className="font-semibold">{name}</h1>
        <p className="flex font-bold items-center text-[#ff6801] text-[18px]">
          <TbCurrencyTaka />
          {price}
        </p>
        <p className="text-sm">
          <del className="text-[#9e9e9e]">{percentage % price}</del>{" "}
          {percentage} %
        </p>
        <div className="flex items-center gap-2 text-[12px]">
          <div className="flex text-[#faca51]">
            <TiStarFullOutline className="text-[12px]" />
            <TiStarFullOutline className="text-[12px]" />
            <TiStarFullOutline className="text-[12px]" />
            <TiStarFullOutline className="text-[12px]" />
          </div>
          ({rating})
        </div>
      </div>
    </div>
  );
};

export default JustForYouCard;
