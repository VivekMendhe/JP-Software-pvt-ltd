import IndexCard from "./IndexCard";
import IndexTitle from "./IndexTitle";

const Index = () => {
  const images = [
    { img: "/index/img1.jpg" },
    { img: "/index/img2.jpg" },
    { img: "/index/img3.jpg" },
    { img: "/index/img4.jpg" },
    { img: "/index/img5.jpg" },
    { img: "/index/img6.jpg" },
    { img: "/index/img7.jpg" },
    { img: "/index/img8.jpg" },
    { img: "/index/img9.jpg" },
    { img: "/index/img10.jpg" },
  ];
  return (
    <div
      style={{ backgroundImage: "url('/itbg.png')" }}
      className="bg-cover bg-center py-5 px-48"
    >
      <IndexTitle />
      <div className="flex mb-12 flex-wrap items-center justify-center">
        {images.map((item, index) => (
          <IndexCard key={index} image={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Index;
