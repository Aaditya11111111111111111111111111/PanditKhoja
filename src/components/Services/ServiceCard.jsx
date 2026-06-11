const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="group flex flex-col bg-white border border-[#e8d5c4] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C62828] transition duration-200 cursor-pointer">

      {/* Image — full, no crop */}
      <div className="bg-[#F5F5F5]">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="h-44 flex items-center justify-center bg-gradient-to-br from-violet-50 to-violet-100">
            <span className="text-5xl group-hover:scale-110 transition-transform duration-200 inline-block">
              {icon}
            </span>
          </div>
        )}
      </div>

      {/* Text body */}
      <div className="px-5 py-3 border-t border-[#f0e6d8]">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <h3 className="text-base font-semibold text-[#1B365D]">
            {title}
          </h3>
        </div>
        <p className="text-[#4a6080] text-sm mt-1 line-clamp-1">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ServiceCard;
