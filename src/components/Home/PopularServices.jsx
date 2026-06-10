import { useRef, useState, useEffect, useCallback } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../Services/ServiceCard";
import { popularServices } from "../../assets/data/popularServices";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const PopularServices = () => {
  const { lang } = useLang();
  const ps = t.popularServices;

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !el.children[0]) return 0;
    return el.children[0].offsetWidth + 20;
  }, []);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / getCardWidth());
    setActiveIndex(index);
  }, [getCardWidth]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <Container>
        <SectionTitle
          title={ps.title[lang]}
          subtitle={ps.subtitle[lang]}
          center={true}
        />
      </Container>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x mt-10 px-4 sm:px-6 lg:px-8"
        style={{ scrollPaddingLeft: "1rem" }}
      >
        {popularServices.map((service, i) => {
          const item = ps.items[i];
          return (
            <div
              key={service.id}
              className="snap-start shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <ServiceCard
                icon={service.icon}
                title={item ? item[lang].title : service.title}
                description={item ? item[lang].description : service.description}
                image={service.image}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        <div className="flex gap-1.5">
          {popularServices.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollTo({ left: i * getCardWidth(), behavior: "smooth" });
              }}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 h-2 bg-violet-700" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {activeIndex === 0 && (
          <div className="flex items-center gap-1 ml-3 text-gray-400 text-xs select-none">
            <span className="animate-indicator inline-block">→</span>
            <span>{ps.scroll[lang]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularServices;
