import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PanditCard from "./PanditCard";
import { pandits } from "../../assets/data/pandits";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";
import { useRef, useState, useEffect, useCallback } from "react";

const FeaturedPandits = () => {
  const { lang } = useLang();
  const fp = t.featuredPandits;

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
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          title={fp.title[lang]}
          subtitle={fp.subtitle[lang]}
          center={true}
        />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x mt-10 px-4 sm:px-6 lg:px-8"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {pandits.map((pandit) => (
            <div
              key={pandit.id}
              className="snap-start shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <PanditCard pandit={pandit} />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-8">
          <div className="flex gap-1.5">
            {pandits.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  el.scrollTo({ left: i * getCardWidth(), behavior: "smooth" });
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 h-2 bg-[#FF6F00]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          {activeIndex === 0 && (
            <div className="flex items-center gap-1 ml-3 text-gray-400 text-xs select-none">
              <span className="animate-indicator inline-block">→</span>
              <span>{t.popularServices.scroll[lang]}</span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedPandits;