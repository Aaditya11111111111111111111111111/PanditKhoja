const StepCard = ({ number, title, description, icon }) => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition duration-200">

      {/* Step Number */}
      <div className="absolute -top-4 left-6 bg-violet-700 text-white w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold shadow-md">
        {number}
      </div>

      <div className="text-4xl mt-4">
        {icon}
      </div>

      <h3 className="mt-5 text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-sm md:text-base text-gray-500 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default StepCard;