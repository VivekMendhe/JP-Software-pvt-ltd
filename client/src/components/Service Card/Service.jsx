import Title from "../UI/Title";
import ServiceCard from "./ServiceCard";
import { FaComputer } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { FaDigitalOcean } from "react-icons/fa";
import { SiBisecthosting } from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import { TbDeviceMobileStar } from "react-icons/tb";
import { SiVorondesign } from "react-icons/si";
import { SiWebpack } from "react-icons/si";

const Service = () => {
  const icons = [
    {
      icon: <FaComputer />,
      title: "Web Development",
      description:
        "Most impressive websites & app experiences are rooted in smart design, embody clear vision, are backed by the right technology",
    },
    {
      icon: <GrCloudSoftware />,
      title: "Software Development",
      description:
        "Software development is the process of designing, programming, testing and maintance.",
    },
    {
      icon: <FaDigitalOcean />,
      title: "Digital Marketing",
      description:
        "Digital Marketing Our digital strategy and consulting services help you build your business and make the right impact among your target audience.",
    },
    {
      icon: <SiBisecthosting />,
      title: "Domain & Hosting",
      description:
        "A domain name, is like the address of your home, web hosting is the space of your house where you place your furniture.",
    },
    {
      icon: <GiArchiveResearch />,
      title: "Search Engines Optimization",
      description:
        "We provide SEO services for Small and large companies around the world to promote their business or services website.",
    },
    {
      icon: <TbDeviceMobileStar />,
      title: "Mobile App Development",
      description:
        "The process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS.",
    },
    {
      icon: <SiVorondesign />,
      title: "UI/UX Design",
      description:
        "This UI/UX (User Interface / User Experience) is build the product you need on time with an experienced team that uses a clear and effective design process.",
    },
    {
      icon: <SiWebpack />,
      title: "Web Design",
      description:
        "Web design refers to the design of websites. It usually refers to the user experience aspects of website develop rather than software development.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: "url('/itbg.png')" }}
      className="bg-cover pb-5"
    >
      <Title />
      <div className=" flex flex-wrap px-32 items-center justify-center">
        {icons.map((item, index) => (
          <ServiceCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
