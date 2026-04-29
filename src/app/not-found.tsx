"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F2F7F4] font-sans selection:bg-[#C47D0C] selection:text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C47D0C]/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B3D2C]/8 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-2xl w-full relative z-10">

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#0B3D2C] rounded-[2.5rem] p-10 sm:p-14 border-4 border-emerald-900 shadow-[10px_10px_0_0_#C47D0C] text-center relative overflow-hidden"
        >
          {/* Decorative bg text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[18rem] font-black text-white/[0.03] leading-none">404</span>
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="text-7xl mb-6 block"
            >
              🏔️
            </motion.div>

            <p className="inline-flex items-center gap-1.5 text-[11px] font-black tracking-[0.2em] text-[#C47D0C] uppercase mb-4">
              <span>✦</span> Error 404
            </p>

            <h1 className="text-5xl sm:text-7xl font-black text-[#F2F7F4] leading-[0.95] tracking-tight">
              Jalur Ini
              <span className="block text-[#C47D0C]">Buntu.</span>
            </h1>

            <p className="mt-6 text-emerald-100/70 font-medium text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
              Seperti jalur pendakian yang salah — halaman yang kamu cari tidak ada. Yuk balik ke basecamp!
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C47D0C] text-white font-black text-base border-2 border-[#E5A030] hover:-translate-y-1 transition-all duration-200 shadow-[0_4px_0_0_#8A5508] active:shadow-none active:translate-y-0"
              >
                ← Kembali ke Home
              </Link>
              <Link
                href="/#gallery"
                className="px-7 py-3.5 rounded-full bg-white/10 text-white font-bold text-base border-2 border-white/20 hover:bg-white/20 transition-colors"
              >
                Lihat Gallery
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats row below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="grid grid-cols-3 gap-3 mt-4"
        >
          <div className="rounded-2xl bg-white p-4 text-center border-2 border-stone-200 shadow-[4px_4px_0_0_#0B3D2C] cursor-default">
            <div className="text-2xl font-black text-[#0B3D2C]">404</div>
            <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mt-1">Page Not Found</div>
          </div>
          <div className="rounded-2xl bg-[#C47D0C] p-4 text-center border-2 border-[#9A6010] shadow-[4px_4px_0_0_#0B3D2C] cursor-default">
            <div className="text-2xl font-black text-white">🧭</div>
            <div className="text-[10px] font-bold text-amber-100 uppercase tracking-wider mt-1">Jalur Salah</div>
          </div>
          <div className="rounded-2xl bg-[#0B3D2C] p-4 text-center border-2 border-emerald-900 shadow-[4px_4px_0_0_#C47D0C] cursor-default">
            <div className="text-2xl font-black text-[#C47D0C]">↩</div>
            <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider mt-1">Balik ke Basecamp</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
