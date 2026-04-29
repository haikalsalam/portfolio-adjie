import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    company: "Dhanoodle Coffee & Resto",
    role: "Server Floor",
    detail:
      "Customer engagement dan operasional POS dengan pelayanan cepat dan ramah.",
  },
  {
    company: "Mie Bandung Kejaksaan",
    role: "Crew Tenant",
    detail:
      "Menjaga service excellence dengan penguasaan menu dan komunikasi yang jelas.",
  },
  {
    company: "PT Sriboga Matahari Nusantara",
    role: "Kitchen Crew",
    detail:
      "Konsisten terhadap SOP dan koordinasi tim agar alur kerja tetap presisi.",
  },
];

const galleries = [
  { src: "/img/sunrise-summit.jpeg", alt: "Sunrise di puncak" },
  { src: "/img/merbabu-sunset.jpeg", alt: "Sunset Merbabu" },
  { src: "/img/telaga-hutan.jpeg", alt: "Telaga hutan tropis" },
  { src: "/img/puncak-lawu-3265.jpeg", alt: "Puncak Lawu 3265 DPL" },
  { src: "/img/sabana-batu-pose.jpeg", alt: "Sabana Gunung Lawu" },
  { src: "/img/merbabu-siang.jpeg", alt: "Panorama Merbabu" },
];

export default function Home() {
  return (
    <div className="bg-[#F2F7F4] text-stone-800 font-sans selection:bg-[#C47D0C] selection:text-white">
      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-screen px-4 sm:px-6 pt-24 pb-16 relative overflow-hidden"
      >
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C47D0C]/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B3D2C]/8 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border-2 border-stone-200 rounded-full text-sm font-bold text-stone-500 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            Terbuka untuk peluang baru · Bogor, Indonesia
          </div>

          {/* Main layout */}
          <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-5 items-start">
            {/* LEFT */}
            <div className="space-y-4">
              {/* Name card */}
              <div className="rounded-[2.5rem] bg-[#0B3D2C] p-8 sm:p-12 text-[#F2F7F4] border-4 border-emerald-900 shadow-[8px_8px_0_0_#C47D0C]">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-black tracking-[0.2em] text-[#C47D0C] uppercase mb-6">
                  <span>✦</span> Adventurous Professional
                </p>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight">
                  Siti Aisyah
                  <span className="block text-[#C47D0C] mt-1">Adjie.</span>
                </h1>
                <p className="mt-6 text-emerald-100/70 font-medium text-base sm:text-lg max-w-md leading-relaxed">
                  Customer Service Specialist · Atlet Pencak Silat Nasional ·
                  Pecinta Alam & Pendaki Gunung
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C47D0C] text-white font-black text-base border-2 border-[#E5A030] hover:-translate-y-1 transition-all duration-200 shadow-[0_4px_0_0_#8A5508] active:shadow-none active:translate-y-0"
                  >
                    Hubungi Saya
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                  <button className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-base border-2 border-white/20 hover:bg-white/20 transition-colors">
                    ↓ Resume
                  </button>
                </div>
              </div>

              {/* Stats bento */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white p-4 sm:p-5 text-center border-2 border-stone-200 shadow-[4px_4px_0_0_#0B3D2C] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#0B3D2C] transition-all duration-200 cursor-default">
                  <div className="text-2xl sm:text-3xl font-black text-[#0B3D2C]">
                    3265
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-wider mt-1">
                    mdpl · Puncak Lawu
                  </div>
                </div>
                <div className="rounded-2xl bg-[#C47D0C] p-4 sm:p-5 text-center border-2 border-[#9A6010] shadow-[4px_4px_0_0_#0B3D2C] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#0B3D2C] transition-all duration-200 cursor-default">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    🥋
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-amber-100 uppercase tracking-wider mt-1">
                    Atlet Nasional
                  </div>
                </div>
                <div className="rounded-2xl bg-[#0B3D2C] p-4 sm:p-5 text-center border-2 border-emerald-900 shadow-[4px_4px_0_0_#C47D0C] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#C47D0C] transition-all duration-200 cursor-default">
                  <div className="text-2xl sm:text-3xl font-black text-[#C47D0C]">
                    3+
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-300 uppercase tracking-wider mt-1">
                    Thn Pengalaman
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Photo + stickers */}
            <div className="relative lg:self-start mt-4 lg:mt-0">
              <div className="rounded-[2.5rem] border-4 border-stone-200 overflow-hidden shadow-[8px_8px_0_0_#0B3D2C] bg-white relative min-h-[380px] lg:min-h-0 lg:aspect-[3/4]">
                <Image
                  src="/img/sabana-close.jpeg"
                  alt="Aisyah profile"
                  fill
                  sizes="(min-width:1280px) 360px, (min-width:1024px) 320px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Sticker: bottom right */}
              <div className="absolute -bottom-5 -right-1 sm:-right-4 rotate-3 bg-white border-2 border-stone-200 shadow-[4px_4px_0_0_#0B3D2C] rounded-2xl px-4 py-2.5 z-10">
                <p className="text-[10px] font-black text-stone-400 uppercase tracking-wide">
                  Atlet Nasional
                </p>
                <p className="text-sm font-black text-[#0B3D2C]">
                  Pencak Silat 🥋
                </p>
              </div>
              {/* Sticker: top left */}
              <div className="absolute -top-4 -left-1 sm:-left-4 -rotate-6 bg-[#C47D0C] border-2 border-[#E5A030] shadow-[3px_3px_0_0_#0B3D2C] rounded-xl px-3.5 py-2 z-10">
                <p className="text-sm font-black text-white">⛰️ 3265 mdpl</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-4 sm:px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-white p-8 sm:p-10 border-4 border-stone-200 shadow-[8px_8px_0_0_#C47D0C]">
          <div className="flex items-start gap-4">
            <span className="text-4xl mt-1 hidden sm:block">🌿</span>
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B3D2C] tracking-tight">
                About Me
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed font-medium text-stone-600">
                Kedisiplinan sebagai atlet Pencak Silat nasional dan kecintaan
                pada alam membentuk karakter saya menjadi tangguh, tenang, dan
                solutif. Setiap tantangan saya respons dengan mindset pelayanan:
                cepat memahami masalah, komunikatif, dan fokus pada solusi
                terbaik untuk pelanggan.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {[
              "Resilience 🌿",
              "Discipline 🥋",
              "Problem Solver 🧩",
              "Nature-lover 🏕️",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-emerald-50 text-[#0B3D2C] font-black border-2 border-emerald-200 text-sm hover:-translate-y-0.5 transition-transform cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="px-4 sm:px-6 py-20 bg-[#0B3D2C]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-[#F2F7F4] tracking-tight">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {experiences.map((item) => (
              <article
                key={item.company}
                className="rounded-[2rem] bg-white p-7 border-4 border-stone-200 shadow-[8px_8px_0_0_rgba(242,247,244,0.18)] hover:-translate-y-1 transition-transform duration-200 cursor-default"
              >
                <h3 className="text-xl font-black text-[#0B3D2C]">
                  {item.company}
                </h3>
                <p className="inline-block mt-2 px-3 py-1 bg-[#C47D0C]/10 text-[#C47D0C] font-black text-sm rounded-full border border-[#C47D0C]/20">
                  {item.role}
                </p>
                <p className="text-stone-500 mt-4 font-medium text-sm leading-relaxed">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B3D2C] tracking-tight">
            Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <div className="rounded-[2rem] bg-white p-8 border-4 border-stone-200 shadow-[8px_8px_0_0_#d6d6d3]">
              <h3 className="text-2xl font-black text-[#0B3D2C] mb-5">
                💻 Technical
              </h3>
              <ul className="space-y-3">
                {[
                  "Microsoft Office (Word, Excel, PowerPoint)",
                  "Google Workspace",
                  "Inventory Management",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100 text-stone-700 font-semibold text-sm"
                  >
                    <span className="text-emerald-600 font-black">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] bg-[#C47D0C] p-8 border-4 border-[#9A6010] shadow-[8px_8px_0_0_#0B3D2C] text-white">
              <h3 className="text-2xl font-black mb-5">🤝 Interpersonal</h3>
              <ul className="space-y-3">
                {[
                  "Communication",
                  "Conflict Resolution",
                  "Time Management",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3 bg-white/15 px-4 py-3 rounded-xl border border-white/10 font-semibold text-sm"
                  >
                    <span className="font-black">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="px-4 sm:px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B3D2C] tracking-tight">
              Outdoor Gallery
            </h2>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-1 text-[#C47D0C] font-black text-sm hover:gap-2 transition-all duration-200"
            >
              Lihat semua foto{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleries.map((item, i) => (
              <div
                key={item.src}
                className={`rounded-2xl overflow-hidden border-4 border-stone-200 shadow-[6px_6px_0_0_#0B3D2C] relative h-56 hover:scale-[1.02] hover:shadow-[6px_8px_0_0_#0B3D2C] transition-all duration-200 ${
                  i % 3 === 1 ? "md:mt-5" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-4 sm:px-6 pt-8 pb-2">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-black text-[#0B3D2C] text-lg">
            Ready to collaborate and serve your customers better.
          </p>
        </div>
      </section>
    </div>
  );
}
