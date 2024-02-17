import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-36 h-14 bg-[#141d38]">
      <div className="flex items-center justify-center text-slate-100">
        <div className="hidden md:flex mr-4 items-center justify-center">
          <NavLink to={`#`} className={`flex`}>
            <IoIosMail className="me-2 text-2xl" />
            <h1 className="hover:text-red-800 ">jpsoftwarepvtltd@gmail.com</h1>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <NavLink to={`#`} className="flex">
            <IoCall className="me-2 text-2xl" />
            <h1 className="hover:text-red-800">
              +91 <span>878</span> <span>886</span> <span>4318</span>
            </h1>
          </NavLink>
        </div>
      </div>
      <div className=" flex items-center justify-between w-20 text-slate-100">
        <Link to="">
          <FaFacebookF className="me-2 text-1xl" />
        </Link>
        <Link to="">
          <FaLinkedinIn className="me-2 text-1xl" />
        </Link>
        <Link to="">
          <FaInstagram className="text-1xl" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
