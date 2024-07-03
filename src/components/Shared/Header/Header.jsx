import { Navbar } from "flowbite-react";
import navLogo from "../../../assets/logo2.png";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className='max-w-[1160px] mx-auto'>
      <Navbar fluid rounded className='lg:px-0'>
        <Navbar.Brand className='cursor-pointer'>
          <img src={navLogo} className='w-[124px]' alt='Doc Plus Logo' />
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <button className='font-medium flex gap-2 items-center px-[28px] py-[14px] border rounded-xl border-color2  text-base text-color1'>
            <span>Appointment</span>
            <span>
              <MdArrowOutward />
            </span>
          </button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className='font-normal text-base text-color1' href='#'>
            Home
          </Navbar.Link>
          <Navbar.Link className='font-normal text-base text-color1' href='#'>
            Services
          </Navbar.Link>
          <Navbar.Link className='font-normal text-base text-color1' href='#'>
            Blog
          </Navbar.Link>
          <Navbar.Link className='font-normal text-base text-color1' href='#'>
            About Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
