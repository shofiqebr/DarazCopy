import Banner from "../../Components/Banner/Banner";
import Usage from "../../Components/Usage/Usage";
import Title from "../../Components/title/Title";
import CardUsp from "./CardUsp";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import JustForYou from "./JustForYou";

const Home = () => {
  return (
    <div>
      <Title title="home" />
      <Banner />
      <Usage />
      <CardUsp />
      <Categories />
      <FlashSale />
      <JustForYou />
    </div>
  );
};

export default Home;
