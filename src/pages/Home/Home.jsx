import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Discount from "../../components/Discount/Discount";
import FAQs from "../../components/FAQs/FAQs";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <AboutUs />
      <Services />
      <Testimonial />
      <FAQs />
      <Discount />
    </div>
  );
};

export default Home;
