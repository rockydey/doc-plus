import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className='relative w-full my-[40px] px-2 md:px-4 lg:px-0'>
      <img src={bannerImg} alt='Banner Image' />
      <div className='absolute inset-0 bg-gradient-to-b from-[#00C19D] to-[#020043] opacity-35 lg:rounded-[45px]'></div>
    </div>
  );
};

export default Banner;
