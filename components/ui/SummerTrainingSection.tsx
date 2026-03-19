"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SUMMER_TRAINING } from "@/app/data";
import { Briefcase, ExternalLink, X, Eye } from "lucide-react";
import { useState } from "react";

export default function SummerTrainingSection() {
    const [selectedCert, setSelectedCert] = useState<{name: string, link: string} | null>(null);

    const getPreviewLink = (link: string) => {
        if (link.includes("drive.google.com/open?id=")) {
            const id = link.split("id=")[1];
            return `https://drive.google.com/file/d/${id}/preview`;
        }
        return link.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");
    };

    return (
        <section className="py-20 relative z-10" id="training">
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
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                        Summer <span className="text-gradient">Training</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {SUMMER_TRAINING.map((training, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                            
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                <div className="md:w-1/3 shrink-0">
                                    <div className="inline-flex p-4 bg-primary/20 rounded-xl text-primary mb-6">
                                        <Briefcase size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{training.institution}</h3>
                                    <p className="text-primary font-medium mb-2">{training.degree}</p>
                                    <p className="text-neutral-500 font-mono text-sm">{training.period}</p>
                                </div>
                                
                                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                                    <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                                        {training.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {training.tags.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-neutral-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {(training as any).certificateLink && (
                                        <button 
                                            onClick={() => setSelectedCert({ name: "Summer Training Certificate", link: (training as any).certificateLink })}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg text-sm font-medium transition-colors w-fit cursor-pointer"
                                        >
                                            View Certificate
                                            <Eye size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
