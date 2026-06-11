import { useRef, useState, useEffect } from "react";
import Container from "../../components/ui/Container";
import { banners } from "../../assets/data/banners";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

// Sandhya Aarati — banners id 6 (index 5)
const heroVideo = banners[5];

const Hero = () => {
  const { lang } = useLang();
  const h = t.hero;

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // Pause when out of viewport, resume when back
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setMuted(newMuted);
  };

  return (
    // onClick on the outermost div — any tap/click bubbles up here
    // unless stopPropagation is called (buttons do this)
    <div
      ref={containerRef}
      className="relative flex items-center overflow-hidden cursor-pointer"
      onClick={toggleSound}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >

      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo.video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay — pointer-events-none so clicks pass through to container */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Foreground content */}
      <Container className="relative z-10 py-8 sm:py-16 md:py-28">
        <div className="text-center max-w-4xl mx-auto">

          <div className="inline-block bg-violet-100 text-violet-700 text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-4 sm:mb-6">
            {h.badge[lang]}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            {h.heading1[lang]}{" "}
            <span className="text-violet-300">{h.highlight[lang]}</span>{" "}
            {h.heading2[lang]}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed">
            {h.sub[lang]}
          </p>

          <div className="mt-6 sm:mt-10 flex flex-row justify-center gap-3">
            <button
              onClick={(e) => e.stopPropagation()}
              className="px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium text-sm sm:text-base bg-violet-700 text-white hover:bg-violet-800 transition cursor-pointer"
            >
              {h.btn1[lang]}
            </button>
            <button
              onClick={(e) => e.stopPropagation()}
              className="px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium text-sm sm:text-base border border-gray-300 text-gray-200 hover:bg-white/10 transition cursor-pointer"
            >
              {h.btn2[lang]}
            </button>
          </div>

          <div className="mt-6 sm:mt-10 flex flex-row justify-center gap-6 sm:gap-16 text-center divide-x divide-white/20">
            <div className="px-3 sm:px-0">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-300">200+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{h.stat1[lang]}</p>
            </div>
            <div className="px-3 sm:px-0">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-300">5000+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{h.stat2[lang]}</p>
            </div>
            <div className="px-3 sm:px-0">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-300">77+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">{h.stat3[lang]}</p>
            </div>
          </div>

        </div>
      </Container>

    </div>
  );
};

export default Hero;
