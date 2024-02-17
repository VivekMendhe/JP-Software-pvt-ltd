const TestimonialCard = ({
  logo,
  name,
  designation,
  testimony,
  active,
  hidden,
}) => {
  return (
    <div className={`py-5 mx-4 ${hidden ? "hidden" : ""}`}>
      <div className="w-[500px] h-[300px] border border-slate-500 rounded-lg">
        <div
          style={{ backgroundImage: "url('/bgimg.png')" }}
          className="h-[300px] w-[500px] rounded-lg  flex flex-col justify-center mt-3 ml-4"
        >
          <div className="flex px-5 items-center pb-5">
            <div className="pr-5">
              <h1 className="text-5xl">{logo}</h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <h1>{designation}</h1>
            </div>
          </div>

          <div className="flex items-center justify-center px-5">
            <p className="text-[16px] text-[#555555]"> {testimony}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
