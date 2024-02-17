const CompanyHero = ({ logo, experience, title }) => {
  return (
    <div>
      <div className="text-[#be271c] mb-3 text-5xl">
        <h1>{logo}</h1>
      </div>
      <div>
        <div className="text-2xl font-bold mb-2">
          <h1>{experience}</h1>
        </div>
        <div className="">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;
