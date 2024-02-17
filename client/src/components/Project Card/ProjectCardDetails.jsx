import { FaLongArrowAltRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const ProjectCardDetails = ({ title, description, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bg})`,
      }}
      className={`relative my-3 text-center border border-slate-100 py-5  flex flex-col justify-center items-center bg-cover bg-center `}
    >
      <div className="w-[350px] h-[300px] flex flex-col items-center justify-center">
        <div className="w-14 h-14 mb-5 hover:bg-[#be271c] hover:cursor-pointer bg-slate-100 rounded-full flex items-center hover:text-slate-100 justify-center">
          <FaSearch />
        </div>
        <div className="mb-3 font-bold text-2xl text-slate-100">
          <h1>{title}</h1>
        </div>
        <div className="text-slate-100">
          <p>{description}</p>
        </div>

        <div className="absolute bottom-0 right-0 mb-0 mr-0">
          <div className="h-12 w-12 flex items-center justify-center hover:text-slate-100 hover:cursor-pointer bg-[#be271c] ">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardDetails;
