"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Code, Briefcase, Award, Trophy, GraduationCap, Mail, AppWindow } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const tabs = [
    { id: "home", label: "Home", icon: Home, color: "text-blue-400", bgGlow: "bg-blue-500/10" },
    { id: "skills", label: "Skills", icon: Code, color: "text-purple-400", bgGlow: "bg-purple-500/10" },
    { id: "projects", label: "Projects", icon: AppWindow, color: "text-emerald-400", bgGlow: "bg-emerald-500/10" },
    { id: "training", label: "Training", icon: Briefcase, color: "text-orange-400", bgGlow: "bg-orange-500/10" },
    { id: "certifications", label: "Certifications", icon: Award, color: "text-cyan-400", bgGlow: "bg-cyan-500/10" },
    { id: "achievements", label: "Achievements", icon: Trophy, color: "text-yellow-400", bgGlow: "bg-yellow-500/10" },
    { id: "experience", label: "Education", icon: GraduationCap, color: "text-pink-400", bgGlow: "bg-pink-500/10" },
    { id: "contact", label: "Contact", icon: Mail, color: "text-red-400", bgGlow: "bg-red-500/10" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scrollspy
      const sections = tabs.map(t => document.getElementById(t.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: id === 'home' ? 0 : element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] md:w-auto overflow-x-auto no-scrollbar rounded-full ${
        isScrolled ? "scale-100 shadow-2xl shadow-primary/20" : "scale-105"
      }`}
    >
      <nav className="flex items-center gap-1.5 p-2 bg-neutral-900/80 dark:bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-xl rounded-full min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`relative px-4 md:px-5 py-3 md:py-2.5 text-sm md:text-base font-semibold transition-colors rounded-full flex items-center gap-2.5 group ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {/* Background Hover Glow */}
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tab.bgGlow} -z-10`} />

              <tab.icon size={20} className={`transition-colors duration-300 ${isActive ? tab.color : `group-hover:${tab.color}`}`} />
              <span className="hidden md:block z-10">{tab.label}</span>
              
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 dark:bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </button>
          );
        })}
        {/* Divider */}
        <div className="w-px h-8 bg-white/10 mx-1 hidden md:block"></div>
        {/* Embed Theme Toggle right inside the Navbar */}
        <div className="pl-1 pr-2 hidden md:block">
            <ThemeToggle />
        </div>
      </nav>
    </motion.div>
  );
}
