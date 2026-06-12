import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const SacredHeritage = () => {
  const { lang } = useLang();
  const data = t.sacredHeritage;
  const journey = data.journey;

  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el, i) => {
      if (el) {
        el.style.transitionProperty = "all";
        el.style.transitionDuration = "500ms";
        el.style.transitionTimingFunction = "cubic-bezier(.2,.9,.3,1)";
        el.style.transitionDelay = `${i * 150}ms`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-[#C62828]">
              {data.badge[lang]}
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-[#1B365D]">
              {data.heading[lang].split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h2>

            <div className="mt-6 w-20 h-1 bg-[#FF6F00]" />

            <p className="mt-8 text-lg leading-relaxed text-[#2e4a70]">
              {data.p1[lang]}
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#2e4a70]">
              {data.p2[lang]}
            </p>

            <blockquote className="mt-10 border-l-4 border-[#FF6F00] pl-6">
              <p className="text-xl italic text-[#1B365D]">{data.quote[lang]}</p>
            </blockquote>

          </div>

          {/* Right Timeline */}
          <div className="relative">

            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#FFB74D]" />

            <div className="space-y-10">

              {journey.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="relative flex gap-6 opacity-0 translate-y-6"
                >
                  <div className="relative z-10 mt-2">
                    <div className="w-8 h-8 rounded-full bg-[#FF6F00] border-4 border-[#F5F5F5] transition-transform duration-300" />
                  </div>

                  <div className="pb-2">
                    <h3 className="text-xl font-semibold text-[#1B365D]">
                      {item[lang].title}
                    </h3>

                    <p className="mt-2 text-[#4a6080] leading-relaxed">
                      {item[lang].description}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default SacredHeritage;