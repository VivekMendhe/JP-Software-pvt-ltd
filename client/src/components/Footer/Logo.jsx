import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="">
      <div className="font-bold mb-5">JP Software</div>
      <div className="mb-5">
        <h1>
          A Leading Website Development & Digital Marketing Company Providing
          one stop solution for all your business needs !!
        </h1>
      </div>
      <div>
        <div className=" flex items-center  text-slate-700 ">
          <Link to="">
            <div className="h-10 w-10 bg-[#be271c] flex items-center justify-center mr-2">
              <FaFacebookF className=" text-1xl" />
            </div>
          </Link>
          <Link to="">
            <div className="h-10 w-10 bg-[#be271c] flex items-center justify-center mr-2">
              <FaLinkedinIn className=" text-1xl" />
            </div>
          </Link>
          <Link to="">
            <div className="h-10 w-10 bg-[#be271c] flex items-center justify-center">
              <FaInstagram className="text-1xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
