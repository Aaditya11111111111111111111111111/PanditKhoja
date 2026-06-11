import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { pandits } from "../../assets/data/pandits";
import { useLang } from "../../context/LanguageContext";  
import { t } from "../../constants/translations";

const Pandits = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { lang } = useLang();
  const p = t.panditsPage;

  const filteredPandits = pandits.filter((pandit) =>
    pandit.name.en.toLowerCase().includes(search.toLowerCase()) ||
    pandit.location.en.toLowerCase().includes(search.toLowerCase()) ||
    pandit.specialty.en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold text-[#1B365D]">{p.heading[lang]}</h1>
      <p className="text-[#2e4a70] mt-2">{p.sub[lang]}</p>

      <div className="mt-6 flex gap-3">
        <input
          type="text"
          placeholder={p.placeholder[lang]}
          className="w-full border border-[#d4bfae] rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredPandits.map((pandit) => (
          <div
            key={pandit.id}
            onClick={() => navigate(`/pandits/${pandit.id}`)}
            className="bg-white border border-[#e8d5c4] rounded-2xl overflow-hidden hover:shadow-md transition cursor-pointer"
          >
            <div className="bg-[#F5F5F5]">
              <img src={pandit.image} alt={pandit.name.en} className="w-full object-contain" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#1B365D]">{pandit.name[lang]}</h2>
              <p className="text-[#2e4a70] mt-1">📍 {pandit.location[lang]}</p>
              <p className="text-[#2e4a70] mt-1">🎓 {pandit.experience[lang]} {p.experience[lang]}</p>
              <p className="text-[#4a6080] mt-2 text-sm">{pandit.specialty[lang]}</p>
              <div className="mt-5">
                <Button onClick={(e) => { e.stopPropagation(); window.location.href = `tel:${pandit.phone}`; }}>
                  {p.contact[lang]}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Pandits;
