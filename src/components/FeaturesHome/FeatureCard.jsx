const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4 p-5 md:p-6 bg-white border border-[#e8d5c4] rounded-xl hover:shadow-md hover:border-[#C62828] transition duration-200">

      <div className="text-2xl md:text-3xl shrink-0">
        {icon}
      </div>

      <div>
        <h3 className="text-base md:text-lg font-semibold text-[#1B365D]">
          {title}
        </h3>

        <p className="text-sm md:text-base text-[#4a6080] mt-1 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
};

export default FeatureCard;