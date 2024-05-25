import FlashSaleCard from "../../Components/FlashSaleCard/FlashSaleCard";


const FlashSale = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <h1 className="text-xl font-medium">FlashSale</h1>
      <div className="flex flex-col p-3 bg-white rounded-md md:flex-row gap-2 justify-between mt-3">
        <div className="flex items-center justify-between gap-16">
          <p className="text-[#ff6801] text-sm">On Sale Now</p>
          <div className="flex items-center gap-2">
            <p className="text-sm">Ending in</p>
            <p className="border py-1 px-2 text-white bg-[#ff6801]">10</p> :
            <p className="border py-1 px-2 text-white bg-[#ff6801]">06</p> :
            <p className="border py-1 px-2 text-white bg-[#ff6801]">12</p>
          </div>
        </div>
        <div className="text-center">
          <button className="border px-4 py-2 border-[#ff6801] rounded-md text-[#ff6801]">
            SHOP MORE
          </button>
        </div>
      </div>
      <hr className="border border-[#d5d5d5]" />
      <div className="bg-white p-3">
        <FlashSaleCard />
      </div>
    </div>
  );
};

export default FlashSale;
