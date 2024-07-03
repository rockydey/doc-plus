import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Discount from "../../components/Discount/Discount";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <AboutUs />
      <Services />
      <Discount />
    </div>
  );
};

export default Home;
