import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const NavBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-40 h-20 bg-slate-100 text-[#222222]">
      {/* <div className="font-extrabold text-2xl">
        <h1>
          <NavLink to="#">JP Software</NavLink>
        </h1>
      </div> */}
      <div className="h-20 w-20">
        <NavLink to="#">
          <img
            src="/com_logo.png"
            className="border-none h-full w-full" // Add these classes
            alt="logo"
          />
        </NavLink>
      </div>

      <div className={`hidden md:block nav-list`}>
        <ul className="flex items-center justify-evenly">
          <li>
            <NavLink to="#">HOME</NavLink>
          </li>
          <li>
            <NavLink to="#">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="#">SERVICES</NavLink>
          </li>
          <li>
            <NavLink to="#">CONTACT US</NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden xl:block ">
        <Button title="Get Customize Quote" />
      </div>
    </div>
  );
};

export default NavBar;
