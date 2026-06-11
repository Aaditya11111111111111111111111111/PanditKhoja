import Container from "../ui/Container";
import FeatureCard from "../FeaturesHome/FeatureCard";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const WhyChoose = () => {
  const { lang } = useLang();
  const w = t.whyChoose;

  return (
    <div className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <span className="inline-block text-[#C62828] font-semibold text-sm uppercase tracking-widest mb-4">
              {w.eyebrow[lang]}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B365D] leading-tight">
              {w.heading[lang]}
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#2e4a70] leading-relaxed">{w.p1[lang]}</p>
            <p className="mt-4 text-base md:text-lg text-[#2e4a70] leading-relaxed">{w.p2[lang]}</p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-[#FF6F00]">200+</p>
                <p className="text-sm text-[#4a6080] mt-0.5">{w.stat1[lang]}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF6F00]">5000+</p>
                <p className="text-sm text-[#4a6080] mt-0.5">{w.stat2[lang]}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#FF6F00]">10+</p>
                <p className="text-sm text-[#4a6080] mt-0.5">{w.stat3[lang]}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {w.features.map((item, index) => (
              <FeatureCard
                key={index}
                icon={["✅","⚡","📍","🤝"][index]}
                title={item[lang].title}
                description={item[lang].description}
              />
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
