import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/navigation";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const navLabelMap = {
  Home:     "home",
  Services: "services",
  Pandits:  "pandits",
  Contact:  "contact",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const navLabel = (item) => {
    const key = navLabelMap[item.label];
    return key ? t.nav[key][lang] : item.label;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e8d5c4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#1B365D]">
            Pandit<span className="text-[#FF6F00]">Khoja</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive
                      ? "text-[#FF6F00]"
                      : "text-[#2e4a70] hover:text-[#FF6F00]"
                  }`
                }
              >
                {navLabel(item)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right — lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex bg-[#ede8e0] rounded-full p-0.5">
              <button
                onClick={() => lang !== "en" && toggleLang()}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                  lang === "en" ? "bg-white text-[#FF6F00] shadow-sm" : "text-[#4a6080] hover:text-[#1B365D]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => lang !== "np" && toggleLang()}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                  lang === "np" ? "bg-white text-[#FF6F00] shadow-sm" : "text-[#4a6080] hover:text-[#1B365D]"
                }`}
              >
                नेपाली
              </button>
            </div>

            <button className="px-5 py-2 rounded-full bg-[#FF6F00] text-white font-medium hover:bg-[#e65c00] transition cursor-pointer text-sm">
              {t.nav.becomePandit[lang]}
            </button>
          </div>

          {/* Mobile right — lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language toggle */}
            <div className="flex bg-[#ede8e0] rounded-full p-0.5">
              <button
                onClick={() => lang !== "en" && toggleLang()}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition ${
                  lang === "en" ? "bg-white text-[#FF6F00] shadow-sm" : "text-[#4a6080]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => lang !== "np" && toggleLang()}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition ${
                  lang === "np" ? "bg-white text-[#FF6F00] shadow-sm" : "text-[#4a6080]"
                }`}
              >
                नेपाली
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-[#1B365D] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#f0e6d8] bg-white px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 px-3 rounded-lg font-medium transition-colors text-sm ${
                  isActive
                    ? "text-[#FF6F00] bg-[#fff3e0]"
                    : "text-[#1B365D] hover:text-[#FF6F00] hover:bg-[#F5F5F5]"
                }`
              }
            >
              {navLabel(item)}
            </NavLink>
          ))}

          <div className="mt-3 pt-3 border-t border-[#f0e6d8]">
            <button className="w-full px-5 py-2.5 rounded-full bg-[#FF6F00] text-white font-medium hover:bg-[#e65c00] transition cursor-pointer text-sm">
              {t.nav.becomePandit[lang]}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
