import { FaLongArrowAltRight } from "react-icons/fa";
import "./ServiceCard.module.css";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="mt-5 px-3 flex flex-wrap items-center">
      <div className="relative w-[270px] h-[400px] rounded-br-lg hover:rounded-bl-lg hover:rounded-br-none bg-slate-100 border border-slate-100 flex flex-col items-center">
        <div className="text-5xl mt-5">{icon}</div>
        <div className="text-[#be271c] font-bold flex flex-wrap text-center text-2xl my-4">
          <h1>{title}</h1>
        </div>
        <div className="text-center text-[#555555]">
          <p>{description}</p>
        </div>
        <div className="absolute bottom-0 right-0 mb-0 mr-0 ">
          <div className="h-12 w-12 flex items-center justify-center bg-[#be271c] rounded-br-lg">
            <FaLongArrowAltRight className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
