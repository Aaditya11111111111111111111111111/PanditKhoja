import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { pandits } from "../assets/data/pandits";
import { useLang } from "../context/LanguageContext";

const PanditDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  const pandit = pandits.find((p) => p.id === parseInt(id));

  if (!pandit) {
    return (
      <Container className="py-12">
        <h1 className="text-xl font-semibold text-[#1B365D]">
          {lang === "np" ? "पण्डित फेला परेन" : "Pandit not found"}
        </h1>
        <button onClick={() => navigate("/pandits")} className="mt-4 text-[#FF6F00] underline text-sm">
          {lang === "np" ? "← पण्डितहरूमा फर्कनुहोस्" : "← Back to Pandits"}
        </button>
      </Container>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${pandit.phone}?text=Hello%20I%20want%20to%20book%20a%20ceremony`, "_blank");
  };
  const handleCall = () => { window.location.href = `tel:${pandit.phone}`; };

  const label = {
    back:        { en: "← Back to Pandits",   np: "← पण्डितहरूमा फर्कनुहोस्" },
    profile:     { en: "Pandit Profile",       np: "पण्डितको विवरण" },
    experience:  { en: "experience",           np: "अनुभव" },
    about:       { en: "About",                np: "परिचय" },
    specialties: { en: "Specialties",          np: "विशेषज्ञता" },
    whatsapp:    { en: "WhatsApp Pandit",      np: "व्हाट्सएप गर्नुहोस्" },
    call:        { en: "Call Now",             np: "अहिले फोन गर्नुहोस्" },
    book:        { en: "Book Ceremony",        np: "संस्कार बुक गर्नुहोस्" },
    modalTitle:  { en: "Book Ceremony",        np: "संस्कार बुक गर्नुहोस्" },
    modalSub:    { en: "Demo booking flow — backend coming later", np: "डेमो बुकिङ — ब्याकएन्ड पछि आउनेछ" },
    submit:      { en: "Submit",               np: "पेश गर्नुहोस्" },
    cancel:      { en: "Cancel",              np: "रद्द गर्नुहोस्" },
  };

  return (
    <Container className="py-10 md:py-16">

      <button onClick={() => navigate("/pandits")}
        className="text-sm text-[#FF6F00] hover:underline mb-6 inline-flex items-center gap-1">
        {label.back[lang]}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* LEFT — image */}
        <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden border border-[#e8d5c4]">
          <img src={pandit.image} alt={pandit.name.en} className="w-full object-contain" />
        </div>

        {/* RIGHT — details */}
        <div className="flex flex-col gap-6">

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C62828] mb-2">
              {label.profile[lang]}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1B365D] leading-tight">
              {pandit.name[lang]}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-[#ede8e0] text-[#1B365D] text-sm font-medium px-4 py-2 rounded-full">
              <span>📍</span><span>{pandit.location[lang]}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#ede8e0] text-[#1B365D] text-sm font-medium px-4 py-2 rounded-full">
              <span>🎓</span><span>{pandit.experience[lang]} {label.experience[lang]}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              {label.about[lang]}
            </p>
            <p className="text-[#2e4a70] leading-relaxed text-base">{pandit.bio[lang]}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              {label.specialties[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {pandit.specialty[lang].split(",").map((s, i) => (
                <span key={i} className="bg-[#fff3e0] text-[#FF6F00] text-sm font-medium px-4 py-1.5 rounded-full border border-[#C62828]">
                  {s.trim()}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-[#e8d5c4]" />

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleWhatsApp} className="flex-1">{label.whatsapp[lang]}</Button>
            <Button variant="secondary" onClick={handleCall} className="flex-1">{label.call[lang]}</Button>
          </div>

          <Button onClick={() => setOpen(true)}>{label.book[lang]}</Button>

        </div>
      </div>

      {/* Booking Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-semibold text-[#1B365D]">{label.modalTitle[lang]}</h2>
            <p className="text-sm text-[#4a6080] mt-1">{label.modalSub[lang]}</p>
            <input className="w-full border border-[#d4bfae] rounded-lg p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-[#FF6F00]" placeholder={lang === "np" ? "तपाईंको नाम" : "Your Name"} />
            <input className="w-full border border-[#d4bfae] rounded-lg p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-[#FF6F00]" placeholder={lang === "np" ? "फोन नम्बर" : "Phone Number"} />
            <select className="w-full border border-[#d4bfae] rounded-lg p-3 mt-3 focus:outline-none focus:ring-2 focus:ring-[#FF6F00]">
              <option>{lang === "np" ? "विवाह संस्कार" : "Marriage Ceremony"}</option>
              <option>{lang === "np" ? "ब्रतबन्ध" : "Bratabandha"}</option>
              <option>{lang === "np" ? "श्राद्ध" : "Shraddha"}</option>
              <option>{lang === "np" ? "गृहप्रवेश" : "Griha Pravesh"}</option>
            </select>
            <div className="flex gap-3 mt-5">
              <Button className="flex-1">{label.submit[lang]}</Button>
              <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>{label.cancel[lang]}</Button>
            </div>
          </div>
        </div>
      )}

    </Container>
  );
};

export default PanditDetails;
