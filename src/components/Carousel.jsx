import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseContainer from "./CourseContainer";
import { useRef, useState } from "react";

const Carousel = () => {
  const sliderRef = useRef(null); // Ref for accessing the slider
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the active slide

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrow navigation buttons
    beforeChange: (current, next) => setCurrentIndex(next), // Update the current index on slide change
  };

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Go to the clicked slide
    }
  };

  return (
    <div className="w-full h-screen relative"> {/* Set height to 100vh for full-screen */}
      <Slider ref={sliderRef} {...settings}>
        <CourseContainer />
        <CourseContainer />
        <CourseContainer />
        <CourseContainer /> {/* Added 4th slide */}
      </Slider>

      {/* Custom Pagination Dots (Positioned at bottom-left of the image) */}
      <div className="absolute bottom-5 left-5 flex gap-2">
        {[...Array(4)].map((_, index) => ( // Create 4 dots
          <button
            key={index}
            onClick={() => handleDotClick(index)} // On click, go to the slide
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white w-12" : "bg-[#cecece] w-4"} 
            transition-all duration-300`} // Transition for smooth change, increase width for active dot
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
