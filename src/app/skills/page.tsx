"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#F2F7F4] pt-24 pb-20 px-4 sm:px-8 font-sans selection:bg-[#C47D0C] selection:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: -4, scale: 1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 inline-block bg-[#C47D0C] text-white px-8 py-2 rounded-xl font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0_0_#0B3D2C] border-2 border-[#0B3D2C] z-10"
          >
            My Toolbox 🧰
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-stone-800 tracking-tight pt-8"
          >
            Skills & <br /> Competencies
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[8px_8px_0_0_#0B3D2C] border-4 border-[#0B3D2C] relative overflow-hidden group"
          >
            <div className="absolute -right-8 -top-8 text-9xl opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
              💻
            </div>
            <h3 className="text-4xl font-black text-[#0B3D2C] mb-8 relative z-10">
              Technical
            </h3>
            <ul className="space-y-4 text-stone-700 font-bold text-xl relative z-10">
              <li className="flex items-center gap-4 bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <span className="text-[#C47D0C] text-3xl">⚡</span> Ms. Office &
                Google Workspace
              </li>
              <li className="flex items-center gap-4 bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <span className="text-[#C47D0C] text-3xl">⚡</span> Inventory
                Management
              </li>
              <li className="flex items-center gap-4 bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <span className="text-[#C47D0C] text-3xl">⚡</span> POS System
                Operation
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#C47D0C] p-8 md:p-12 rounded-[3.5rem] shadow-[8px_8px_0_0_#0B3D2C] border-4 border-[#0B3D2C] relative overflow-hidden group"
          >
            <div className="absolute -right-8 -top-8 text-9xl opacity-[0.05] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
              🤝
            </div>
            <h3 className="text-4xl font-black text-white mb-8 relative z-10">
              Interpersonal
            </h3>
            <ul className="space-y-4 text-white font-bold text-xl relative z-10">
              <li className="flex items-center gap-4 bg-amber-600 p-4 rounded-3xl border border-amber-500 hover:bg-amber-700 transition-colors">
                <span className="text-yellow-300 text-3xl">🌟</span>{" "}
                Communication & Empathy
              </li>
              <li className="flex items-center gap-4 bg-amber-600 p-4 rounded-3xl border border-amber-500 hover:bg-amber-700 transition-colors">
                <span className="text-yellow-300 text-3xl">🌟</span> Conflict
                Resolution
              </li>
              <li className="flex items-center gap-4 bg-amber-600 p-4 rounded-3xl border border-amber-500 hover:bg-amber-700 transition-colors">
                <span className="text-yellow-300 text-3xl">🌟</span> Team
                Leadership
              </li>
              <li className="flex items-center gap-4 bg-amber-600 p-4 rounded-3xl border border-amber-500 hover:bg-amber-700 transition-colors">
                <span className="text-yellow-300 text-3xl">🌟</span> Highly
                Disciplined
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
