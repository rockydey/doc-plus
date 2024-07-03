import aboutImg from "../../assets/who-section.png";
import { MdArrowOutward } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='my-40 px-2 md:px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center gap-6'>
      <div className='lg:w-3/5'>
        <p className='font-normal mb-5 text-base text-color1 py-3 px-6 border w-fit border-color2 rounded-full'>
          Who we are
        </p>
        <h4 className='font-semibold text-4xl text-color mb-5'>
          We Help To Get Solutions
        </h4>
        <p className='text-base font-normal text-color2 mb-10'>
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className='flex px-6 py-4 bg-color3 rounded-xl items-center gap-3 text-[#000] font-semibold text-base'>
          Learn more <MdArrowOutward />
        </button>
      </div>
      <div className=''>
        <div className=''>
          <img
            className='lg:w-4/5 lg:ml-auto z-10 '
            src={aboutImg}
            alt='About Section Image'
          />
        </div>
        <div className='px-7 mt-5 lg:w-96 py-10 z-50 relative bg-[#343268] lg:-mt-40 rounded-[34px]'>
          <h4 className='font-medium text-[26px] text-[#FFFFFF] mb-5'>
            Our mission is simple
          </h4>
          <p className='text-[#FFFFFFCC] text-base font-normal'>
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
