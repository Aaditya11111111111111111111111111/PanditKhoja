import { useState } from "react";
import Container from "../ui/Container";
import { banners } from "../../assets/data/banners";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const ctaBanner = banners[1];

const Contact = () => {
  const { lang } = useLang();
  const c = t.contactPage;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Message sent! (Backend coming soon)"); };

  return (
    <div>
      {/* Hero banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
        style={{ backgroundImage: `url(${ctaBanner.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <Container className="relative z-10 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FFB74D] mb-3">{c.eyebrow[lang]}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{c.heading[lang]}</h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg max-w-xl mx-auto">{c.sub[lang]}</p>
        </Container>
      </div>

      {/* Main content */}
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C62828] mb-2">{c.detailsEye[lang]}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D]">{c.detailsHead[lang]}</h2>
              <p className="mt-3 text-[#4a6080] leading-relaxed">{c.detailsSub[lang]}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] rounded-2xl border border-[#e8d5c4]">
                <div className="text-2xl shrink-0">📍</div>
                <div>
                  <p className="font-semibold text-[#1B365D] text-sm">{c.address[lang]}</p>
                  <p className="text-[#4a6080] text-sm mt-0.5">Biratnagar, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] rounded-2xl border border-[#e8d5c4]">
                <div className="text-2xl shrink-0">📞</div>
                <div>
                  <p className="font-semibold text-[#1B365D] text-sm">{c.phone[lang]}</p>
                  <a href="tel:+97798420009649" className="text-[#FF6F00] text-sm mt-0.5 hover:underline">+977 98-4200-9649</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] rounded-2xl border border-[#e8d5c4]">
                <div className="text-2xl shrink-0">✉️</div>
                <div>
                  <p className="font-semibold text-[#1B365D] text-sm">{c.email[lang]}</p>
                  <a href="mailto:hello@panditkhoja.com" className="text-[#FF6F00] text-sm mt-0.5 hover:underline">hello@panditkhoja.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F5F5F5] rounded-2xl border border-[#e8d5c4]">
                <div className="text-2xl shrink-0">🕐</div>
                <div>
                  <p className="font-semibold text-[#1B365D] text-sm">{c.hours[lang]}</p>
                  <p className="text-[#4a6080] text-sm mt-0.5">{c.hoursVal[lang]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="bg-white border border-[#e8d5c4] rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1B365D] mb-1">{c.formTitle[lang]}</h3>
            <p className="text-sm text-[#4a6080] mb-6">{c.formSub[lang]}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1B365D] mb-1">{c.labelName[lang]}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={c.phName[lang]}
                  className="w-full border border-[#d4bfae] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B365D] mb-1">{c.labelEmail[lang]}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.phEmail[lang]}
                  className="w-full border border-[#d4bfae] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B365D] mb-1">{c.labelPhone[lang]}</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={c.phPhone[lang]}
                  className="w-full border border-[#d4bfae] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B365D] mb-1">{c.labelMsg[lang]}</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder={c.phMsg[lang]}
                  className="w-full border border-[#d4bfae] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:border-transparent resize-none" />
              </div>
              <button type="submit" className="w-full bg-[#FF6F00] text-white font-medium py-3 rounded-full hover:bg-[#e65c00] transition cursor-pointer">
                {c.send[lang]}
              </button>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Contact;
