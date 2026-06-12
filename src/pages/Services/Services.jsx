import Container from "../../components/ui/Container";
import ServiceCard from "../../components/Home/Services/ServiceCard";
import { popularServices } from "../../assets/data/popularServices";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const Services = () => {
  const { lang } = useLang();
  const s = t.servicesPage;
  const ps = t.popularServices;

  return (
    <div className="py-12 md:py-16">
      <Container>
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C62828] mb-2">
            {s.eyebrow[lang]}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D]">{s.heading[lang]}</h1>
          <p className="mt-3 text-[#4a6080] max-w-xl">{s.sub[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service, i) => {
            const item = ps.items[i];
            return (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={item ? item[lang].title : service.title}
                description={item ? item[lang].description : service.description}
                image={service.image}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
