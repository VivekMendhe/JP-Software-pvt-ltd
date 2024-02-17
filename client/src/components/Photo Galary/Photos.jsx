import { FaSearch } from "react-icons/fa";

const Photos = ({ bg }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bg})`,
      }}
      className="bg-cover bg-center flex items-center justify-center my-2 mx-2 w-[350px] h-[200px] border border-slate-100"
    >
      <div className="flex items-center justify-center rounded-full bg-slate-100 hover:bg-[#be271c] hover:text-slate-100 hover:cursor-pointer h-[50px] w-[50px]">
        <FaSearch />
      </div>
    </div>
  );
};

export default Photos;
