import DurationIcon from "./icons/DuratioIcon";
import PointsIcon from "./icons/PointsIcon";
import Label from "./Label";




const CourseContainer = () => {
  return (
    <div className="relative w-full h-screen text-white rounded-lg overflow-hidden shadow-lg">

      {/* Background Shape - Bottom Layer */}
      <img
        src="../../assets/backgroundShape.png"
        alt="Background Shape"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Background Image - Middle Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <img
          src="../../assets/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay - Above Background Images */}
      <div className="absolute top-0 left-0 w-full h-full z-30" />

      <Label />

      {/* Course Content */}
      <div className="absolute bottom-5 left-5 right-5 z-40">
        <h2 className="text-xl font-semibold">Basics of AI Engineering</h2>
        <p className="text-sm mt-2 w-full max-w-[35%]">
          Lorem ipsum dolor sit amet, consectetur amet Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet.
        </p>
        <div className="flex items-center justify-between w-full mt-4 max-w-[35%] pb-8">
          <div className="flex items-center gap-2">
            <DurationIcon />
            <span className="text-xs">2 hours 30 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <PointsIcon />
            <span className="text-xs">Upto +25 points</span>
          </div>
        </div>
      </div>

      {/* View More Button - Positioned at Bottom Right */}
      <div className="absolute bottom-5 right-5 z-40">
        <button
          className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-transparent px-4 py-2 text-xs border text-left p-3 text-gray-50 font-semibold rounded-full overflow-hidden after:absolute after:z-10 after:w-10 after:h-8 after:content[''] after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CourseContainer;