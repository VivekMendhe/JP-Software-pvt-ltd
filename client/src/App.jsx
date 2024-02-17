// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutCompany from "./components/Body/AboutCompany";
import MeetWithUS from "./components/Body/MeetWithUs";
import ProgrammingLanguage from "./components/Body/ProgrammingLanguage";
import Footer from "./components/Footer/Footer";
// import CarouselImage from "./components/Carousel/CarouselImage";
import NavBar from "./components/Header/NavBar";
import TopBar from "./components/Header/TopBar";
import Index from "./components/Index Card/Index";
import PhotoGalary from "./components/Photo Galary/PhotoGalary";
import ProjectCard from "./components/Project Card/ProjectCard";
import Service from "./components/Service Card/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import CarouselFade from "./components/UI/CarouselFade";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <CarouselFade />
      {/* <CarouselImage /> */}

      <AboutCompany />
      <Service />

      <MeetWithUS />

      <ProgrammingLanguage />
      <ProjectCard />

      <Index />
      <PhotoGalary />

      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
