import footerLogo from "../../../assets/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-color1 py-32'>
      <div className='max-w-[1160px] mx-auto md:px-4 lg:px-2 px-2'>
        <img className='w-[124px]' src={footerLogo} alt='Doc Plus Logo' />
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-6 text-color5 font-normal text-base'>
            <p>
              123 Main Street Anytown, USA <br />
              Postal Code: 12345
            </p>
            <p>
              Support: support@oyolloo.com <br /> (Available : 10:00am to
              07:00pm)
            </p>
          </div>
          <div className='space-y-3 lg:ml-auto text-color5 font-semibold text-sm'>
            <p>
              <a href='#'>Home</a>
            </p>
            <p>
              <a href='#'>About Us</a>
            </p>
            <p>
              <a href='#'>Success Page</a>
            </p>
            <p>
              <a href='#'>Terms And Condition</a>
            </p>
          </div>
          <div className='space-y-3 lg:ml-auto text-color5 font-semibold text-sm'>
            <p>
              <a href='#'>Services</a>
            </p>
            <p>
              <a href='#'>Scheduling</a>
            </p>
            <p>
              <a href='#'>Contact Us</a>
            </p>
            <p>
              <a href='#'>Patient Portal</a>
            </p>
          </div>
          <div className="lg:ml-auto">
            <p className='text-color5 font-semibold text-sm'>Follow Us</p>
            <div className='flex items-center gap-7 text-2xl text-color5 mt-3'>
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
            <p className='mt-8 text-color5 font-normal text-sm'>
              @docplus 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
