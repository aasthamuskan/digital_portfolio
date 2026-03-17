"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { PROFILE } from "@/app/data";

export default function ResumeSection() {
    const resumeLink = PROFILE.socials.find(s => s.name === "Resume")?.href || "#";

    return (
        <section id="resume" className="relative py-24 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden flex items-center justify-center min-h-[40vh]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-6 text-center z-10"
            >
                <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-black/30 p-12 rounded-[3rem] border border-neutral-200 dark:border-neutral-800 shadow-2xl relative overflow-hidden">
                     {/* Decorative background elements inside the card */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
                        Want to see the <span className="text-gradient hover:text-primary transition-colors duration-300">full picture?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                        Download my comprehensive resume to dive deeper into my professional experience, academic background, and technical skillset.
                    </p>
                    
                    <motion.a
                        href={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                    >
                        <Download size={20} />
                        Download Resume
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
