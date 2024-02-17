import { Link } from "react-router-dom";

const ProgrammingLanguage = () => {
  return (
    <div className="bg-slate-100 py-14 px-48 flex flex-wrap items-center justify-between">
      <Link to="#">
        <img src="/PHP-logo.svg.png" width="100px" height="100px" />
      </Link>
      <Link to="#">
        <img src="/WordPress_blue_logo.svg.png" width="100px" height="100px" />
      </Link>
      <Link to="#">
        <img src="/JavaScript-logo.png" width="100px" height="100px" />
      </Link>
      <Link to="#">
        <img
          src="/Java_programming_language_logo.svg.png"
          width="60px"
          height="50px"
        />
      </Link>
    </div>
  );
};

export default ProgrammingLanguage;
