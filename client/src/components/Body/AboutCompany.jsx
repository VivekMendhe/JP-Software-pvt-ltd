import CompanyHero from "../UI/CompanyHero";
import { FaMedal } from "react-icons/fa";

const AboutCompany = () => {
  const logo = {
    logo_1: <FaMedal />,
  };
  return (
    <div
      className="h-[550px]"
      style={{ backgroundImage: "url('/white bg.png')" }}
    >
      <div className="px-36  mb-20">
        <h1 className="font-bold mt-10 text-[#be271c] uppercase">
          About Company
        </h1>
        <h1 className="text-4xl my-3 font-bold">
          Welcome To <span className="text-orange-500 text-5xl">S</span>waPra
          Technologies
        </h1>
        <div className="flex items-center justify-center gap-10 my-3">
          <div className="w-[50%]">
            <div className="flex flex-wrap mt-0 text-[#555555] mb-5">
              <p>
                A Leading Website Development & Digital Marketing Company
                Providing one-stop solution for all your business needs!!!!
              </p>
              <p>
                We utilize the latest technology to bring results to grow our
                clients’ business. From Website Design, Search Engine
                Optimization, Social Media Management, or a fully integrated and
                creative digital marketing strategy, SwaPra Technologies has
                both the track record and in-house ability to support your
                business.
              </p>
            </div>
            <div className="flex justify-between">
              <CompanyHero
                logo={logo.logo_1}
                experience="8+"
                title="Experience"
              />
              <CompanyHero
                logo={logo.logo_1}
                experience="1250+"
                title="Happy Customers"
              />
              <CompanyHero
                logo={logo.logo_1}
                experience="24/7"
                title="Quick Support"
              />
            </div>
          </div>
          <div className="w-[50%] flex flex-col">
            <div>
              <img
                src="/software-development-lifecycle-1.png"
                height="200px"
                width="450px"
                className="object-cover"
              />
            </div>
            <div className="text-[#be271c] font-bold">
              <h1>
                <span className="text-2xl font-bold">&rarr;</span> Learn more
                about company
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
