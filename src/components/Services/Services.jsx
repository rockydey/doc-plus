import { MdArrowOutward } from "react-icons/md";
import serviceImg1 from "../../assets/service-img1.png";
import serviceImg2 from "../../assets/service-img2.png";
import serviceImg3 from "../../assets/service-img3.png";

const Services = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 px-2 md:px-4 lg:px-0'>
      <div className='lg:w-4/5'>
        <p className='font-normal mb-5 text-base text-color1 py-3 px-6 border w-fit border-color2 rounded-full'>
          Service
        </p>
        <h4 className='font-semibold text-4xl text-color mb-5'>
          Empowering Health, Enriching Lives
        </h4>
        <p className='text-base font-normal text-color2 mb-10'>
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className='flex px-6 py-4 bg-color3 rounded-xl items-center gap-3 text-[#000] font-semibold text-base'>
          Appointment <MdArrowOutward />
        </button>
      </div>
      <div className='relative'>
        <img src={serviceImg1} alt='Service Image 1' />
        <div className='p-6 mt-5 md:w-96 z-50 absolute bottom-7 md:left-7 bg-[#0200439c] rounded-[20px]'>
          <h4 className='font-medium text-[26px] text-[#FFFFFF] mb-5'>
            Advanced Technology
          </h4>
          <div className='flex flex-col md:flex-row md:items-end gap-5'>
            <p className='text-[#FFFFFFCC] text-base font-normal'>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <p className='flex text-2xl -mb-3 text-color5 bg-color3 p-4 rounded-full w-fit'>
              <MdArrowOutward />
            </p>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img src={serviceImg2} alt='Service Image 2' />
        <div className='p-6 mt-5 md:w-96 z-50 absolute bottom-7 md:left-7 bg-[#0200439c] rounded-[20px]'>
          <h4 className='font-medium text-[26px] text-[#FFFFFF] mb-5'>
            Online Doctor Meet
          </h4>
          <div className='flex flex-col md:flex-row md:items-end gap-5'>
            <p className='text-[#FFFFFFCC] text-base font-normal'>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <p className='flex text-2xl -mb-3 text-color5 bg-color3 p-4 rounded-full w-fit'>
              <MdArrowOutward />
            </p>
          </div>
        </div>
      </div>
      <div className='relative'>
        <img src={serviceImg3} alt='Service Image 3' />
        <div className='p-6 mt-5 md:w-96 z-50 absolute bottom-7 md:left-7 bg-[#0200439c] rounded-[20px]'>
          <h4 className='font-medium text-[26px] text-[#FFFFFF] mb-5'>
            Consultancy your health
          </h4>
          <div className='flex flex-col md:flex-row md:items-end gap-5'>
            <p className='text-[#FFFFFFCC] text-base font-normal'>
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
            <p className='flex text-2xl -mb-3 text-color5 bg-color3 p-4 rounded-full w-fit'>
              <MdArrowOutward />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
