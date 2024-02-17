import Logo from "./Logo";
import OurPage from "./OurPage";

const Footer = () => {
  return (
    <div className="px-48">
      <hr />
      <div className="sm:flex sm:justify-between py-5 ">
        <div className="flex-grow w-[20%]">
          <Logo />
        </div>
        <div className="flex-grow  w-[20%]">
          <OurPage />
        </div>
        <div className="flex-grow ">Our services</div>
        <div className="flex-grow ">Contact Us</div>
      </div>
      <hr className="text-orange-700" />
      <div className="flex items-center px-5 py-5">
        <h1>
          <span className="text-black">
            Website Design-Development and Maintenance by{" "}
          </span>
          <span className="text-[#f37020] font-bold text-2xl italic">S</span>
          <span className="text-black font-bold">wapra Technologies</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
