"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#0B3D2C] text-[#F2F7F4] py-12 px-4 sm:px-8 border-t-8 border-[#C47D0C] font-sans rounded-t-[3rem] mt-12 overflow-hidden mx-2 sm:mx-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative">
        <div className="absolute -left-10 -top-10 text-9xl opacity-10 rotate-12">
          ⛰️
        </div>

        <div className="text-center md:text-left z-10">
          <h2 className="text-3xl font-black mb-2 tracking-tight">
            Siti Aisyah Adjie <span className="text-[#C47D0C]">.</span>
          </h2>
          <p className="font-bold text-emerald-200/80">
            Professional Service, Adventurous Spirit.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end z-10 gap-4">
          <a
            href="wa.me/6285719694993"
            className="bg-[#C47D0C] text-white px-6 py-3 rounded-full font-black hover:bg-[#9A6010] transition-colors shadow-[4px_4px_0_0_#F2F7F4] border-2 border-white hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          >
            Let&apos;s Talk! 🤙
          </a>
          <p className="text-sm font-bold opacity-70">
            © {new Date().getFullYear()} • Bogor, Indonesia 📍
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
