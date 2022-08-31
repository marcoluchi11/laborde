import i1 from "./images/Slider13.webp";
import i2 from "./images/Slider15.webp";
import i3 from "./images/SlidePrincipal3.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Header = () => {
  return (
    <header>
      <Carousel
        infiniteLoop
        autoPlay
        swipeable
        useKeyboardArrows
        showThumbs={false}
      >
        <div>
          <img src={i1} alt="slider1" />
        </div>
        <div>
          <img src={i2} alt="slider2" />
        </div>
        <div>
          <img src={i3} alt="slider3" />
        </div>
      </Carousel>
    </header>
  );
};

export default Header;
