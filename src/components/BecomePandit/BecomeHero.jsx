import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const BecomeHero = () => {
  const { lang } = useLang();
  const h = t.becomePandit.hero;

  return (
    <div className="bg-[#1B365D] py-24 md:py-32 text-center px-6">
      {/* OM symbol accent */}
      <div className="text-5xl text-[#FF6F00] mb-6 leading-none select-none">ॐ</div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
        {lang === "en" ? (
          <>
            {h.heading.en}{" "}
            <span className="text-[#FF6F00]">PanditKhoja</span>
          </>
        ) : (
          h.heading.np
        )}
      </h1>

      <p className="mt-6 text-lg md:text-xl text-[#b8cce4] max-w-2xl mx-auto leading-relaxed">
        {h.subtitle[lang]}
      </p>

      {/* Divider */}
      <div className="w-16 h-0.5 bg-[#FF6F00] mx-auto mt-10" />
    </div>
  );
};

export default BecomeHero;
