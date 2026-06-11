const StepCard = ({ number, title, description, icon }) => {
  return (
    <div className="relative bg-white border border-[#e8d5c4] rounded-2xl p-6 md:p-8 hover:shadow-lg transition duration-200">

      {/* Step Number */}
      <div className="absolute -top-4 left-6 bg-[#FF6F00] text-white w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold shadow-md">
        {number}
      </div>

      <div className="text-4xl mt-4">
        {icon}
      </div>

      <h3 className="mt-5 text-lg md:text-xl font-semibold text-[#1B365D]">
        {title}
      </h3>

      <p className="mt-2 text-sm md:text-base text-[#4a6080] leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default StepCard;