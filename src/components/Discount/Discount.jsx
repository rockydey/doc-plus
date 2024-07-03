import { MdArrowOutward } from "react-icons/md";
import appointmentImg from "../../assets/appointment-img.png";
import docLogo from "../../assets/logo1.png";

const Discount = () => {
  return (
    <div className='my-40 px-2 md:px-4 lg:px-0'>
      <div className='relative w-full my-[40px] px-2 md:px-4 lg:px-0'>
        <img src={appointmentImg} alt='Banner Image' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#020043] to-[#02004343] opacity-95 lg:rounded-[45px]'></div>
        <div className='absolute inset-0 flex justify-between p-2 md:p-10 lg:p-16 text-white'>
          <div className="lg:py-12">
            <h1 className='font-semibold text-white md:text-3xl lg:text-[40px]'>
              Get Your <span className="block lg:mb-5"></span>
              First Appointment <span className="block lg:mb-5"></span>
              at 50% Off!
            </h1>
            <div className="flex gap-2 md:gap-6 mt-3 md:mt-6">
              <button className='flex px-2 py-1  md:px-6  md:py-4 border border-color3 bg-color3 rounded-xl items-center gap-3 text-[#000] font-semibold text-sm md:text-base'>
                Appointment <MdArrowOutward />
              </button>
              <button className='flex px-2 py-1 md:px-6 md:py-4 rounded-xl items-center gap-3 text-white font-semibold text-sm md:text-base border-white border'>
                Learn More <MdArrowOutward />
              </button>
            </div>
          </div>
          <div>
            <img className='w-20 md:w-[124px]' src={docLogo} alt='doc plus logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
