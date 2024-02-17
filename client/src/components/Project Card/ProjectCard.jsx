import ProjectCardTitle from "./ProjctCardTitle";
import ProjectCardDetails from "./ProjectCardDetails";

const ProjectCard = () => {
  const ProjectCards = [
    {
      bg: "/project_bg_1.png",
      title: "Web Development",
      description:
        "Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).",
    },
    {
      bg: "/project_bg_2.png",
      title: "Digital Marketing",
      description:
        "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
    },
    {
      bg: "/project_bg_3.png",
      title: "Software Development",
      description:
        "Software development projects in software engineering are structured endeavors to design, build, and deploy software solutions to address specific needs or problems.",
    },
    {
      bg: "/project_bg_4.png",
      title: "Mobile App Development",
      description:
        "It's the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets.",
    },
    {
      bg: "/project_bg_5.png",
      title: "Social Media Marketing",
      description:
        "Social media is digital technology that allows the sharing of ideas and information, including text and visuals.",
    },
    {
      bg: "/project_bg_6.png",
      title: "Wordpress Project",
      description:
        "WordPress provides the opportunity for anyone to create and share, from handcrafted personal anecdotes to world-changing movements.",
    },
  ];
  return (
    <div className="py-5 bg-[#f5f5f5]  px-48 ">
      <ProjectCardTitle />

      <div className="flex flex-wrap px-2 items-center justify-between">
        {ProjectCards.map((item, index) => (
          <ProjectCardDetails
            key={index}
            bg={item.bg}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <h1 className="text-[#be271c] font-bold mt-4 text-center">
        We Have Done More Than 1550+ Projects in Last 8 Years, With 100%
        Satisfaction.
      </h1>
    </div>
  );
};

export default ProjectCard;
