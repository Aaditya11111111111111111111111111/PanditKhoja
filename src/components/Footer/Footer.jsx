import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const Footer = () => {
  const { lang } = useLang();
  const f = t.footer;

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Pandit<span className="text-violet-700">Khoja</span>
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {f.tagline[lang]}
          </p>

          <p className="text-sm text-gray-500">
            {f.copyright[lang]}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
