"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/img/sunrise-summit.jpeg", caption: "Sunrise di Puncak ✨" },
  { src: "/img/merbabu-sunset.jpeg", caption: "Merbabu — Merapi Sunset 🌅" },
  { src: "/img/telaga-hutan.jpeg", caption: "Telaga Hutan Tropis 🌿" },
  { src: "/img/puncak-lawu-3265.jpeg", caption: "Puncak Lawu 3265 DPL 🏔️" },
  { src: "/img/gerbang-lawu-ceto.jpeg", caption: "Gerbang Lawu Via Ceto 🧗‍♀️" },
  { src: "/img/sabana-batu-pose.jpeg", caption: "Sabana Gunung Lawu 🌾" },
  { src: "/img/sabana-close.jpeg", caption: "Morning on the Ridge 🌤️" },
  { src: "/img/sabana-peace.jpeg", caption: "Happy Trails! ✌️" },
  { src: "/img/merbabu-siang.jpeg", caption: "Panorama Merbabu ⛰️" },
  { src: "/img/panorama-puncak.jpeg", caption: "Summit Views 🌄" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#F2F7F4] pt-24 pb-20 px-4 sm:px-8 font-sans selection:bg-[#0B3D2C] selection:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-[8px] border-[#0B3D2C] pb-8">
          <div>
            <span className="text-6xl mb-4 block animate-bounce">🏔️</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#0B3D2C] tracking-tight">
              Outdoor <br /> Canvas
            </h1>
          </div>
          <p className="text-stone-500 font-black text-xl max-w-sm mt-6 md:mt-0 md:text-right bg-stone-200 p-4 rounded-2xl border-2 border-stone-300">
            Where I find my balance. A collection of my wild adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {images.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`bg-white p-4 pb-12 rounded-3xl shadow-[8px_8px_0_0_#0B3D2C] border-4 border-[#0B3D2C] transform hover:scale-105 transition-all duration-300 cursor-pointer relative group ${
                i % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
              }`}
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-stone-300 relative border-2 border-stone-200">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#C47D0C] text-white px-6 py-2 rounded-full font-black text-sm border-4 border-[#0B3D2C] shadow-sm whitespace-nowrap transform group-hover:-translate-y-2 transition-transform">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
