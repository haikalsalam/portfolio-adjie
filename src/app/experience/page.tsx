"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Dhanoodle Coffee & Resto",
      role: "Server Floor",
      desc: "Focus on customer engagement & POS System management to ensure excellent daily operations.",
      icon: "☕",
      color: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      company: "Mie Bandung Kejaksaan",
      role: "Crew Tenant",
      desc: "Maintained service excellence and in-depth menu knowledge to provide the best dining experience.",
      icon: "🍜",
      color: "bg-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      company: "PT Sriboga Matahari",
      role: "Kitchen Crew",
      desc: "Focused on Standard Operating Procedure (SOP) compliance and effective team coordination.",
      icon: "🍳",
      color: "bg-emerald-100",
      borderColor: "border-emerald-300",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B3D2C] pt-24 pb-20 px-4 sm:px-8 font-sans selection:bg-[#C47D0C] selection:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1 bg-emerald-800 text-emerald-100 font-bold rounded-full text-sm mb-4 border border-emerald-600">
            Work History 🕰️
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#F2F7F4] tracking-tight">
            Professional <br />
            <span className="text-[#C47D0C] underline decoration-wavy decoration-8 underline-offset-8">
              Experience
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-[2.5rem] ${exp.color} border-4 ${exp.borderColor} flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-default shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]`}
            >
              <div>
                <div className="text-4xl mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm border-2 border-stone-200">
                  {exp.icon}
                </div>
                <h2 className="text-3xl font-black text-stone-800 mb-2 leading-tight">
                  {exp.company}
                </h2>
                <div className="inline-block px-4 py-1.5 bg-white rounded-full font-black text-sm text-[#0B3D2C] mb-6 shadow-sm border-2 border-stone-200">
                  {exp.role}
                </div>
                <p className="text-stone-700 font-bold text-lg leading-relaxed text-balance">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
