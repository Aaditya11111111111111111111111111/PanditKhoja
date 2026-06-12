import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { t } from "../../constants/translations";

const districts = [
  "Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan",
  "Butwal", "Biratnagar", "Birgunj", "Dharan", "Hetauda",
  "Nepalgunj", "Dhangadhi", "Janakpur", "Itahari", "Damak",
];

const RegistrationForm = () => {
  const { lang } = useLang();
  const f = t.becomePandit.form;

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    district: "",
    experience: "",
    specialties: [],
    languages: [],
    intro: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = prev[field];
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to backend
    alert(f.successMsg[lang]);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        {/* Card */}
        <div className="rounded-2xl bg-white shadow-lg border border-[#e8d5c4] p-8 md:p-12">
          {/* Heading */}
          <div className="text-center mb-8">
            <span className="inline-block text-[#C62828] font-semibold text-sm uppercase tracking-widest mb-2">
              {f.eyebrow[lang]}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D]">
              {f.heading[lang]}
            </h2>
            <p className="mt-2 text-[#4a6080] text-sm">
              {f.sub[lang]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-1.5">
                {f.labelName[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder={f.phName[lang]}
                className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] bg-[#fdfaf7] text-[#1B365D] placeholder-[#aab8c8] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/40 focus:border-[#FF6F00] transition text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-1.5">
                {f.labelPhone[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder={f.phPhone[lang]}
                className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] bg-[#fdfaf7] text-[#1B365D] placeholder-[#aab8c8] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/40 focus:border-[#FF6F00] transition text-sm"
              />
            </div>

            {/* District */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-1.5">
                {f.labelDistrict[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] bg-[#fdfaf7] text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/40 focus:border-[#FF6F00] transition text-sm appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  {f.phDistrict[lang]}
                </option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-1.5">
                {f.labelExp[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <input
                type="number"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                min="0"
                max="80"
                placeholder={f.phExp[lang]}
                className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] bg-[#fdfaf7] text-[#1B365D] placeholder-[#aab8c8] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/40 focus:border-[#FF6F00] transition text-sm"
              />
            </div>

            {/* Specialties */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-2">
                {f.labelSpec[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {f.specialties.map((s) => (
                  <button
                    type="button"
                    key={s.en}
                    onClick={() => toggleCheckbox("specialties", s.en)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                      form.specialties.includes(s.en)
                        ? "bg-[#FF6F00] text-white border-[#FF6F00]"
                        : "bg-white text-[#4a6080] border-[#e8d5c4] hover:border-[#FF6F00] hover:text-[#FF6F00]"
                    }`}
                  >
                    {s[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Languages Spoken */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-2">
                {f.labelLang[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {f.languages.map((l) => (
                  <button
                    type="button"
                    key={l.en}
                    onClick={() => toggleCheckbox("languages", l.en)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                      form.languages.includes(l.en)
                        ? "bg-[#1B365D] text-white border-[#1B365D]"
                        : "bg-white text-[#4a6080] border-[#e8d5c4] hover:border-[#1B365D] hover:text-[#1B365D]"
                    }`}
                  >
                    {l[lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Short Introduction */}
            <div>
              <label className="block text-sm font-semibold text-[#1B365D] mb-1.5">
                {f.labelIntro[lang]} <span className="text-[#C62828]">*</span>
              </label>
              <textarea
                name="intro"
                value={form.intro}
                onChange={handleChange}
                required
                rows={4}
                placeholder={f.phIntro[lang]}
                className="w-full px-4 py-3 rounded-xl border border-[#e8d5c4] bg-[#fdfaf7] text-[#1B365D] placeholder-[#aab8c8] focus:outline-none focus:ring-2 focus:ring-[#FF6F00]/40 focus:border-[#FF6F00] transition text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#FF6F00] text-white font-semibold text-base hover:bg-[#e65c00] transition cursor-pointer shadow-sm"
            >
              {f.submit[lang]}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
