"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES } from "@/app/data";
import { Award, X } from "lucide-react";
import TiltCard from "./TiltCard";
import { useState } from "react";

export default function CertificationsSection() {
    const [selectedCert, setSelectedCert] = useState<{name: string, link: string} | null>(null);

    const getPreviewLink = (link: string) => {
        if (link.includes("drive.google.com/open?id=")) {
            const id = link.split("id=")[1];
            return `https://drive.google.com/file/d/${id}/preview`;
        }
        return link.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");
    };

    return (
        <section className="py-20 relative z-10" id="certifications">
            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/50 backdrop-blur-md">
                                <h3 className="text-xl font-bold text-text-primary">{selectedCert.name}</h3>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 rounded-full hover:bg-white/10 text-text-secondary hover:text-white transition-colors cursor-pointer"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex-1 w-full bg-neutral-100 dark:bg-neutral-900 p-0 md:p-4 rounded-b-2xl">
                                <iframe 
                                    src={getPreviewLink(selectedCert.link)} 
                                    className="w-full h-full border-none rounded-xl bg-white shadow-inner"
                                    title={`${selectedCert.name} Preview`}
                                    allow="autoplay"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Continual Learning
                    </span>
                    <h2 className="text-4xl font-bold font-display mb-4 text-text-primary">
                        Professional <span className="text-gradient">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {CERTIFICATES.map((cert, i) => (
                        <TiltCard key={i} className="h-64 cursor-pointer group">
                            <div
                                onClick={() => setSelectedCert(cert)}
                                className="block h-full w-full rounded-3xl overflow-hidden relative drop-shadow-2xl"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${cert.image})` }}
                                />
                                
                                {/* Dark Gradient Overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-colors duration-500" />
                                
                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="bg-blue-500/20 w-fit p-2 rounded-lg text-blue-400 mb-3 backdrop-blur-md border border-white/10">
                                        <Award size={20} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-blue-200 transition-colors">
                                        {cert.name}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        View Certificate <Award size={14} />
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
