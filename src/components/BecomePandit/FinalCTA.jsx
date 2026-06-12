import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";
import { ROUTES } from "../../constants/router";

const FinalCTA = () => {
  const { lang } = useLang();
  const c = t.becomePandit.finalCta;

  return (
    <div className="bg-[#1B365D] py-20 text-center px-6">
      {/* Decorative divider */}
      <div className="text-3xl text-[#FF6F00] mb-6 select-none">ॐ</div>

      <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl mx-auto leading-tight">
        {c.heading[lang]}
      </h2>

      <p className="mt-4 text-[#b8cce4] text-base md:text-lg max-w-lg mx-auto">
        {c.sub[lang]}
      </p>

      <div className="mt-8">
        <Link
          to={ROUTES.CONTACT}
          className="inline-block px-8 py-3.5 rounded-full bg-[#FF6F00] text-white font-semibold text-base hover:bg-[#e65c00] transition shadow-sm"
        >
          {c.btn[lang]}
        </Link>
      </div>
    </div>
  );
};

export default FinalCTA;
