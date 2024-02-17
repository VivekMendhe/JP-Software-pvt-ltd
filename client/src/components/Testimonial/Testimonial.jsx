import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialTitle from "./TestimonialTitle";
import { PiDiceOneBold } from "react-icons/pi";

const Testimonial = () => {
  const testimonies = [
    {
      logo: <PiDiceOneBold />,
      name: "Ravi Patil",
      designation: "CEO",
      testimony:
        "AMAZING COMPANY WITH TOP TALENT. I HIGHLY RECOMMEND THEM. THEIR CUSTOMER SERVICE IS TOP NOTCH AS WELL.",
    },
    {
      logo: <PiDiceOneBold />,
      name: "Mila Khan",
      designation: "Manager",
      testimony:
        "The creativity, design, development and realization of our site. Please pass on our thanks to the rest of the team too.",
    },
    {
      logo: <PiDiceOneBold />,
      name: "Shankar Singh",
      designation: "Support",
      testimony:
        "This service has everything that you'll need to target your audience, create a compelling email, What's App and SMS monitor results and boost your sales.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-48 py-5 relative overflow-hidden">
      <div>
        <TestimonialTitle />
      </div>
      <div className="relative flex">
        {testimonies.map((item, index) => (
          <TestimonialCard
            key={index}
            logo={item.logo}
            name={item.name}
            designation={item.designation}
            testimony={item.testimony}
            active={index === currentIndex}
            hidden={index !== currentIndex}
          />
        ))}
        <button
          className="absolute right-0 bottom-0 mb-4 mr-4"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="absolute right-0 bottom-0 mb-4 mr-16"
          onClick={handlePrev}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
