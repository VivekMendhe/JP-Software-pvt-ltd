import PhotoGalaryTitle from "./PhotoGalaryTitle";
import Photos from "./Photos";

const PhotoGalary = () => {
  const images = [
    { img: "/Office/o1.jpeg" },
    { img: "/Office/o2.jpg" },
    { img: "/Office/o3.jpg" },
    { img: "/Office/o4.jpg" },
    { img: "/Office/o5.jpg" },
  ];
  return (
    <div className="py-5 bg-slate-200 px-48">
      <PhotoGalaryTitle />
      <div className=" flex flex-wrap my-5">
        {images.map((item, index) => (
          <Photos key={index} bg={item.img} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGalary;
