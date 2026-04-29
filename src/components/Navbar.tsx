"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Gallery", href: "/#gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl rounded-2xl px-5 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(11,61,44,0.12)] border border-stone-200/80"
            : "bg-[#F2F7F4]/70 backdrop-blur-md border border-white/40"
        }`}
      >
        <div className="flex justify-between items-center h-14">
          <Link href="/#home" className="text-lg font-black text-[#0B3D2C] tracking-tight">
            Aisyah<span className="text-[#C47D0C]">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-stone-500 hover:text-[#0B3D2C] hover:bg-stone-100 rounded-xl transition-all duration-150"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-3 px-5 py-2 bg-[#0B3D2C] text-white text-sm font-bold rounded-xl hover:bg-emerald-900 transition-colors shadow-[0_2px_0_0_rgba(0,0,0,0.3)]"
            >
              Contact
            </Link>
          </div>

          {/* Animated hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 bg-[#0B3D2C] origin-center rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="block h-[2px] w-5 bg-[#0B3D2C] rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 bg-[#0B3D2C] origin-center rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0B3D2C] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C47D0C]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col items-center gap-6 w-full px-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-[#F2F7F4] hover:text-[#C47D0C] transition-colors tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05, duration: 0.2 }}
                className="mt-4"
              >
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-3.5 bg-[#C47D0C] text-white font-black text-xl rounded-2xl border-2 border-[#E5A030] hover:-translate-y-1 transition-transform shadow-[0_4px_0_0_#8A5508]"
                >
                  Contact Me ✉️
                </Link>
              </motion.div>
            </div>

            <div className="absolute bottom-8 text-8xl opacity-10 select-none pointer-events-none">
              ⛰️
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
