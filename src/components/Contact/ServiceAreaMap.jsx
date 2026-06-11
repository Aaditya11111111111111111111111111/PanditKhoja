import Container from "../ui/Container";
import { banners } from "../../assets/data/banners";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const serviceAreaBanner = banners[2];

const ServiceAreaMap = () => {
  const { lang } = useLang();
  const s = t.serviceArea;

  return (
    <div className="py-14 md:py-20 bg-[#F5F5F5]">
      <Container>
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C62828] mb-2">{s.eyebrow[lang]}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D]">{s.heading[lang]}</h2>
          <p className="mt-3 text-[#4a6080] max-w-lg mx-auto text-sm md:text-base">{s.sub[lang]}</p>
        </div>
        <div className="bg-white border border-[#e8d5c4] rounded-2xl overflow-hidden shadow-sm">
          <img src={serviceAreaBanner.image} alt="Service area map" className="w-full object-contain" />
        </div>
      </Container>
    </div>
  );
};

export default ServiceAreaMap;
