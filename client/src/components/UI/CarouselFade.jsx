import Carousel from "react-bootstrap/Carousel";

const CarouselFade = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-[500px] object-cover"
            src="/Web Development.jpg"
            alt="JAVA"
            height="100px"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-[500px] object-cover"
            src="/Digital Market.jpg"
            alt="HTML"
            height="100px"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 h-[500px] object-cover "
            src="/IT Software.jpg"
            alt="Angular"
            height="100px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselFade;
