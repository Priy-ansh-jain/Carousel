const SchedulingComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      {/* Header Section */}
      <div className="self-stretch p-2 flex justify-center items-center gap-2">
        <div className="flex-1 text-center text-[48px] font-bold leading-[56px] break-words max-w-[900px]">
          {/* Main Header Text */}
          <span className="text-transparent bg-gradient-to-r from-[#78a1df] via-[#6898ec] to-[#e0c1f2] bg-clip-text">
            Lets get you started with scheduling
          </span>
          <br />
          {/* Highlighted Gradient Text */}
          <span className="text-transparent bg-gradient-to-r from-[#cfa1fa] via-[#b294ee] to-[#D388FF] bg-clip-text">
            your AI interview
          </span>
        </div>
      </div>
      {/* Selected Candidates Section */}
      <div className="self-stretch text-center">
        <span className="text-[#161616] text-[24px] font-normal leading-[24px] break-words">
          You have selected
        </span>
        <span className="text-[#161616] text-[24px] font-semibold leading-[24px] break-words"> </span>
        <span className="text-[#0072DC] text-[24px] font-semibold leading-[24px] break-words">
          1024 candidates
        </span>
        <span className="text-[#161616] text-[24px] font-normal leading-[24px] break-words">
          <span> for interview.</span>
        </span>
      </div>
    </div>
  );
};

export default SchedulingComponent;
