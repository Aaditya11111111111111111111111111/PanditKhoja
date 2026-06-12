import React from "react";
import Container from "../../ui/Container";
import { useLang } from "../../../context/LanguageContext";
import { t } from "../../../constants/translations";

const SacredHeritage = () => {
  const { lang } = useLang();
  const data = t.sacredHeritage;

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <Container>
        <div className="max-w-3xl">

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
      </Container>
    </section>
  );
};

export default SacredHeritage;