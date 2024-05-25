import Banner from "../../Components/Banner/Banner";
import Usage from "../../Components/Usage/Usage";
import CardUsp from "./CardUsp";
import Categories from "./Categories";
import FlashSale from "./FlashSale";

const Home = () => {
  return (
    <div>
      <Banner />
      <Usage />
      <CardUsp />
      <FlashSale />
      <Categories />
    </div>
  );
};

export default Home;
