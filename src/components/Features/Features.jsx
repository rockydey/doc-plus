import pieChart from "../../assets/pie-chart.png";
import badge from "../../assets/badge.png";
import imgGroup from "../../assets/img-group.png";
import coin from "../../assets/coin.png";
import video from "../../assets/video.png";
import { FaStar } from "react-icons/fa6";

const Features = () => {
  return (
    <div className='px-2 md:px-4 lg:px-0'>
      <h3 className='text-center text-color1 font-semibold text-3xl md:text-5xl lg:-mb-20 '>
        Comprehensive Care <span className='block'></span> for Every Patient
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:mt-0 lg:grid-cols-5 gap-5 items-end'>
        <div className='p-5 border border-[#02004333] rounded-3xl'>
          <h3 className='text-color1 font-medium text-[40px] mb-2'>90%</h3>
          <p className='text-color1 text-sm font-normal mb-6 pr-5'>
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img src={pieChart} className='w-32 mx-auto' alt='Pie Chart' />
        </div>
        <div className='p-5 border border-[#02004333] rounded-3xl'>
          <h3 className='text-color1 font-medium text-[40px] mb-2'>500+</h3>
          <p className='text-color1 text-sm font-normal'>
            Board-certified <br /> doctors
          </p>
          <img src={badge} className='w-20 -mt-2 ml-auto' alt='Pie Chart' />
        </div>
        <div className='p-5 border border-[#02004333] rounded-3xl'>
          <h3 className='text-color1 font-medium text-[40px] mb-2 flex items-center gap-3'>
            4.8{" "}
            <span className='text-3xl text-color3'>
              <FaStar />
            </span>
          </h3>
          <p className='text-color1 text-sm font-normal'>Over 20,000 Patient</p>
          <img src={imgGroup} className='w-28 mt-5' alt='Pie Chart' />
        </div>
        <div className='p-5 border border-[#02004333] rounded-3xl'>
          <h3 className='text-color1 font-medium text-[40px] mb-2'>$5000</h3>
          <p className='text-color1 text-sm font-normal'>
            Money spend <br />
            for poor patient
          </p>
          <img src={coin} className='w-20 ml-auto' alt='Pie Chart' />
        </div>
        <div className='p-5 border border-[#02004333] rounded-3xl'>
          <h3 className='text-color1 font-medium text-[40px] mb-2'>50+</h3>
          <p className='text-color1 text-sm font-normal mb-9 pr-5'>
            Free lession video for patient
          </p>
          <img src={video} className='w-32 mx-auto' alt='Pie Chart' />
        </div>
      </div>
    </div>
  );
};

export default Features;
