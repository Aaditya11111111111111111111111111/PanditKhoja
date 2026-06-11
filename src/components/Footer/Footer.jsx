import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const Footer = () => {
  const { lang } = useLang();
  const f = t.footer;

  return (
    <footer className="border-t border-[#e8d5c4] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h2 className="text-xl font-bold text-[#1B365D]">
              Pandit<span className="text-[#FF6F00]">Khoja</span>
            </h2>
          </div>

          <p className="text-sm text-[#4a6080]">
            {f.tagline[lang]}
          </p>

          <p className="text-sm text-[#4a6080]">
            {f.copyright[lang]}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
