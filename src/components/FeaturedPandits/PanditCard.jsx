import { useLang } from "../../context/LanguageContext";

const PanditCard = ({ pandit }) => {
  const { lang } = useLang();

  return (
    <div className="group flex flex-col bg-white border border-[#e8d5c4] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C62828] transition duration-200 cursor-pointer">

      {/* Image area like ServiceCard */}
      <div className="bg-[#F5F5F5]">
        {pandit.image ? (
          <img
            src={pandit.image}
            alt={pandit.name[lang]}
            className="w-full  object-fit group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="h-44 flex items-center justify-center bg-linear-to-br from-violet-50 to-violet-100">
            <span className="text-5xl group-hover:scale-110 transition-transform duration-200 inline-block">🕉️</span>
          </div>
        )}
      </div>

      {/* Text body */}
      <div className="px-5 py-3 border-t border-[#f0e6d8]">
        <h3 className="text-base font-semibold text-[#1B365D] text-center">
          {pandit.name[lang]}
        </h3>
        <p className="text-[#4a6080] text-sm mt-1 text-center">📍 {pandit.location[lang]}</p>
        <p className="text-[#4a6080] text-sm mt-1 text-center">🎓 {pandit.experience[lang]}</p>
        <p className="text-[#4a6080] text-sm mt-3 text-center line-clamp-2">{pandit.specialty[lang]}</p>
      </div>
    </div>
  );
};

export default PanditCard;