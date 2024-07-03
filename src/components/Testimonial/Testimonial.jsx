import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='my-40 px-2 md:px-4 lg:px-0'>
      <p className='font-normal mb-5 text-base text-color1 py-3 px-6 border w-fit border-color2 rounded-full'>
        Testimonial
      </p>
      <h2 className='text-3xl font-medium text-color1 mt-4 mb-7'>
        What they say about us
      </h2>
      <div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          spaceBetween={45}
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className='mySwiper'>
          <SwiperSlide>
            <div>
              <h3 className='text-color1 font-semibold text-lg mb-3'>
                Expertise and Compassion <br /> Combined
              </h3>
              <p className='mb-4 text-[#4D4C7B] text-sm font-normal'>
                I can nott thank enough for their exceptional care. The doctors
                and staff showed incredible expertise and compassion throughout
                my treatment journey. I felt truly cared for every step of the
                way.
              </p>
              <div className='flex items-center gap-3'>
                <div>
                  <img className='w-11' src={img1} alt='' />
                </div>
                <div>
                  <p className='text-[#4D4C7B] text-sm font-medium mb-1'>
                    <span className='text-color1 font-semibold'>Sarah D,</span>
                    IT Professional
                  </p>
                  <div className='flex text-lg gap-1 text-color3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3 className='text-color1 font-semibold text-lg mb-3'>
                Life-Saving Care, Life-Changing Experience
              </h3>
              <p className='mb-4 text-[#4D4C7B] text-sm font-normal'>
                My experience at [Healthcare Provider Name] was life-changing.
                The prompt and accurate diagnosis, coupled with the advanced
                treatments they provided, saved my life.
              </p>
              <div className='flex items-center gap-3'>
                <div>
                  <img className='w-11' src={img2} alt='' />
                </div>
                <div>
                  <p className='text-[#4D4C7B] text-sm font-medium mb-1'>
                    <span className='text-color1 font-semibold'>
                      Michael R,{" "}
                    </span>
                    Business Executive
                  </p>
                  <div className='flex text-lg gap-1 text-color3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3 className='text-color1 font-semibold text-lg mb-3'>
                A Partner in Health and Wellness
              </h3>
              <p className='mb-4 text-[#4D4C7B] text-sm font-normal'>
                As a busy professional, I appreciate the convenience and quality
                of care I receive at [Healthcare Provider Name]. From
                telemedicine consultations to routine check-ups, they have
                become my trusted partner in health and
              </p>
              <div className='flex items-center gap-3'>
                <div>
                  <img className='w-11' src={img3} alt='' />
                </div>
                <div>
                  <p className='text-[#4D4C7B] text-sm font-medium mb-1'>
                    <span className='text-color1 font-semibold'>David S, </span>
                    Lawyer
                  </p>
                  <div className='flex text-lg gap-1 text-color3'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
