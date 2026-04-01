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

const galleries = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <div className="bg-[#F5F5F4] text-stone-800 font-sans selection:bg-[#EA580C] selection:text-white">
      <section id="home" className="min-h-[88vh] px-4 sm:px-8 pt-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 rounded-[2.5rem] bg-[#064E3B] p-8 sm:p-10 text-[#F5F5F4] border-4 border-emerald-800 shadow-[8px_8px_0_0_#d6d6d3]">
            <p className="inline-block px-4 py-1 rounded-full bg-[#EA580C] text-sm font-black tracking-wide mb-5">
              Adventurous Professional
            </p>
            <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
              Siti Aisyah Adjie
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-emerald-100 font-semibold">
              Customer Service Specialist | National Pencak Silat Athlete |
              Outdoor Enthusiast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#EA580C] text-white font-black border-2 border-orange-400 hover:-translate-y-1 transition-transform"
              >
                Contact Me
              </a>
              <button className="px-6 py-3 rounded-full bg-white/10 text-white font-black border-2 border-emerald-500 hover:bg-white/20 transition-colors">
                Download Resume
              </button>
            </div>
          </div>
          <div className="md:col-span-2 rounded-[2.5rem] border-4 border-stone-200 overflow-hidden shadow-[8px_8px_0_0_#064E3B] bg-white relative min-h-[360px]">
            <Image
              src="https://placehold.co/600x800?text=Profile+Photo+Outdoor"
              alt="Aisyah profile"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section id="about" className="px-4 sm:px-8 py-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-white p-8 sm:p-10 border-4 border-stone-200 shadow-[8px_8px_0_0_#EA580C]">
          <h2 className="text-3xl sm:text-5xl font-black text-[#064E3B] tracking-tight">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-relaxed font-medium text-stone-600">
            Kedisiplinan sebagai atlet Pencak Silat nasional dan kecintaan pada
            alam membentuk karakter saya menjadi tangguh, tenang, dan solutif.
            Setiap tantangan saya respons dengan mindset pelayanan: cepat
            memahami masalah, komunikatif, dan fokus pada solusi terbaik untuk
            pelanggan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-[#064E3B] font-black border border-emerald-300">
              Resilience
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-[#064E3B] font-black border border-emerald-300">
              Discipline
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-[#064E3B] font-black border border-emerald-300">
              Problem Solver
            </span>
            <span className="px-4 py-2 rounded-full bg-emerald-100 text-[#064E3B] font-black border border-emerald-300">
              Nature-lover
            </span>
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 sm:px-8 py-20 bg-[#064E3B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F4] tracking-tight">
            Professional Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {experiences.map((item) => (
              <article
                key={item.company}
                className="rounded-[2rem] bg-white p-7 border-4 border-stone-200 shadow-[8px_8px_0_0_rgba(245,245,244,0.25)]"
              >
                <h3 className="text-xl font-black text-[#064E3B]">
                  {item.company}
                </h3>
                <p className="text-[#EA580C] font-black mt-1">{item.role}</p>
                <p className="text-stone-600 mt-4 font-medium">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 sm:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-[#064E3B] tracking-tight">
            Skills & Competencies
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-[2rem] bg-white p-8 border-4 border-stone-200 shadow-[8px_8px_0_0_#d6d6d3]">
              <h3 className="text-2xl font-black text-[#064E3B]">Technical</h3>
              <ul className="mt-5 space-y-3 text-stone-700 font-semibold">
                <li>Microsoft Office (Word, Excel, PowerPoint)</li>
                <li>Google Workspace</li>
                <li>Inventory Management</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-[#EA580C] p-8 border-4 border-orange-700 shadow-[8px_8px_0_0_#064E3B] text-white">
              <h3 className="text-2xl font-black">Interpersonal</h3>
              <ul className="mt-5 space-y-3 font-semibold">
                <li>Communication</li>
                <li>Conflict Resolution</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 sm:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-5xl font-black text-[#064E3B] tracking-tight">
              Outdoor Gallery
            </h2>
            <Link
              href="/gallery"
              className="text-[#EA580C] font-black underline underline-offset-4"
            >
              Open full gallery
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {galleries.map((item) => (
              <div
                key={item}
                className="rounded-3xl overflow-hidden border-4 border-stone-200 shadow-[6px_6px_0_0_#d6d6d3] relative h-56"
              >
                <Image
                  src={`https://picsum.photos/seed/mountain${item}/400/300`}
                  alt={`Outdoor photo ${item}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 sm:px-8 pt-8 pb-2">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-black text-[#064E3B] text-lg">
            Ready to collaborate and serve your customers better.
          </p>
        </div>
      </section>
    </div>
  );
}
