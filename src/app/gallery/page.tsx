"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = Array.from({ length: 6 }).map(
    (_, i) =>
      `https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=400&auto=format&fit=crop&sig=${i}`,
  );

  return (
    <div className="min-h-screen bg-[#F5F5F4] pt-24 pb-20 px-4 sm:px-8 font-sans selection:bg-[#064E3B] selection:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-[8px] border-[#064E3B] pb-8">
          <div>
            <span className="text-6xl mb-4 block animate-bounce">🏔️</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#064E3B] tracking-tight">
              Outdoor <br /> Canvas
            </h1>
          </div>
          <p className="text-stone-500 font-black text-xl max-w-sm mt-6 md:mt-0 md:text-right bg-stone-200 p-4 rounded-2xl border-2 border-stone-300">
            Where I find my balance. A collection of my wild adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {images.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`bg-white p-4 pb-12 rounded-3xl shadow-[8px_8px_0_0_#064E3B] border-4 border-[#064E3B] transform hover:scale-105 transition-all duration-300 cursor-pointer relative group ${
                i % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
              }`}
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-stone-300 relative border-2 border-stone-200">
                <img
                  src={url}
                  alt={`Nature photo ${i}`}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#EA580C] text-white px-6 py-2 rounded-full font-black text-base border-4 border-[#064E3B] shadow-sm whitespace-nowrap transform group-hover:-translate-y-2 transition-transform">
                Adventure #{i + 1} ✨
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
