import { useState } from "react";

const ToggleButton = () => {
  const [selected, setSelected] = useState("nonTechnical");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-[58.5px] w-[600px] flex bg-gray-200 rounded-full p-1 space-x-4">
        {/* Non-Technical Button */}
        <button
          className={`flex items-center justify-center px-4 py-2 rounded-full w-[319px] text-sm font-medium transition duration-300 ease-in-out ${selected === "nonTechnical"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-white text-gray-700"
            }`}
          onClick={() => setSelected("nonTechnical")}
        >
          <span className="">
            <img
              src={selected === "nonTechnical" ? "assets/icon2.svg" : "assets/icon1.svg"}
              alt="Non-Technical Icon"
              className={selected === "nonTechnical" ? "mt-4" : "mr-2 px-4"} // Apply mt-5 only for icon2
            />
          </span>
          AI Non-Technical Interview
        </button>

        {/* Technical Button */}
        <button
          className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition duration-300 w-[319px] ease-in-out ${selected === "technical"
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            : "bg-white text-gray-700"
            }`}
          onClick={() => setSelected("technical")}
        >
          <span className="mr-2">
            <img
              src={selected === "technical" ? "assets/icon2.svg" : "assets/icon1.svg"}
              alt="Technical Icon"
              className={selected === "technical" ? "mt-4" : "px-6"}
            />
          </span>
          AI Technical Interview
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
