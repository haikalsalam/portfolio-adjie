"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F4] pt-24 pb-20 px-4 sm:px-8 font-sans selection:bg-[#064E3B] selection:text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[8px_8px_0_0_#064E3B] border-4 border-[#064E3B]"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">🧗‍♀️</span>
            <h1 className="text-4xl md:text-6xl font-black text-[#064E3B] tracking-tight">
              About Me.
            </h1>
          </div>

          <div className="space-y-6 text-lg sm:text-xl text-stone-700 font-medium leading-relaxed">
            <p className="bg-stone-100 p-6 rounded-3xl shadow-inner border-2 border-stone-200">
              "Kedisiplinan sebagai atlet Pencak Silat nasional dan kecintaan
              pada alam telah membentuk karakter saya yang tangguh dan solutif."
            </p>

            <p>
              Halo! Saya{" "}
              <span className="bg-[#EA580C] text-white px-2 py-1 rounded-md font-bold inline-block transform origin-bottom hover:rotate-3 transition-transform cursor-default">
                Siti Aisyah Adjie
              </span>
              . Saya percaya bahwa pengalaman di alam bebas bukan sekadar hobi,
              melainkan guru terbaik yang mengajarkan ketahanan mental, kerja
              sama, dan cara menghadapi tantangan tak terduga.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 bg-emerald-100 text-[#064E3B] font-black rounded-full border-2 border-emerald-300 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                Resilience 🌿
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-[#064E3B] font-black rounded-full border-2 border-emerald-300 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                Discipline 🥋
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-[#064E3B] font-black rounded-full border-2 border-emerald-300 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                Problem Solver 🧩
              </span>
              <span className="px-4 py-2 bg-emerald-100 text-[#064E3B] font-black rounded-full border-2 border-emerald-300 shadow-sm hover:-translate-y-1 transition-transform cursor-default">
                Nature Lover 🏕️
              </span>
            </div>

            <p className="mt-6 font-bold text-stone-500">
              Nilai-nilai ini menjadi landasan kuat saya dalam memberikan
              pelayanan pelanggan yang sepenuh hati, empatik, dan efektif di
              dunia profesional.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
