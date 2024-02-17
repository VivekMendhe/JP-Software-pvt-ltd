import "./IndexCard.module.css";

const IndexCard = ({ image }) => {
  return (
    <div className="px-2 py-2">
      <img
        className=" py-5 hover:bg-slate-100 px-4 rounded-lg w-[200px] h-[250px]"
        src={image}
        alt="index-img"
        width="200px"
        height="200px"
      />
    </div>
  );
};

export default IndexCard;
