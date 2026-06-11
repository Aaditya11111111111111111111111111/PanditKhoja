import Container from "../ui/Container";
import { banners } from "../../assets/data/banners";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const ctaBanner = banners[0];

const BecomePanditCTA = () => {
  const { lang } = useLang();
  const c = t.cta;

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28"
      style={{ backgroundImage: `url(${ctaBanner.image})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto text-white">

          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            {c.badge[lang]}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {c.heading[lang]}
          </h2>

          <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {c.sub[lang]}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full font-medium text-base bg-white text-violet-700 hover:bg-violet-50 transition cursor-pointer">
              {c.btn1[lang]}
            </button>
            <button className="px-8 py-3.5 rounded-full font-medium text-base bg-white/10 border border-white text-white hover:bg-white/20 backdrop-blur-sm transition cursor-pointer">
              {c.btn2[lang]}
            </button>
          </div>

          <p className="mt-8 text-sm text-white/60">{c.footer[lang]}</p>

        </div>
      </Container>
    </div>
  );
};

export default BecomePanditCTA;
