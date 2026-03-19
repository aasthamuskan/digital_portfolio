"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS } from "@/app/data";
import { Trophy, X } from "lucide-react";
import TiltCard from "./TiltCard";

export default function AchievementsSection() {
    const [lcSolved, setLcSolved] = useState<number | null>(null);
    const [selectedCert, setSelectedCert] = useState<{name: string, link: string} | null>(null);

    useEffect(() => {
        fetch("/api/coding-stats")
            .then(res => res.json())
            .then(data => {
                if (data?.leetcode?.totalSolved) {
                    setLcSolved(data.leetcode.totalSolved);
                }
            })
            .catch(console.error);
    }, []);

    const getPreviewLink = (link: string) => {
        if (link.includes("drive.google.com/open?id=")) {
            const id = link.split("id=")[1];
            return `https://drive.google.com/file/d/${id}/preview`;
        }
        return link.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");
    };

    const handleAchievementClick = (ach: any) => {
        if (ach.link?.includes('drive.google.com')) {
            setSelectedCert({ name: ach.title, link: ach.link });
        } else if (ach.link) {
            window.open(ach.link, "_blank");
        }
    };

    return (
        <section className="py-20 relative z-10" id="achievements">
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
                        Recognition
                    </span>
                    <h2 className="text-4xl font-bold font-display mb-4 text-text-primary">
                        Competitive <span className="text-gradient">Achievements</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <TiltCard className="h-full">
                        <div className="bg-card border border-border p-8 rounded-3xl h-full shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-500">
                                    <Trophy size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary">Achievements</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {ACHIEVEMENTS.map((ach, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group"
                                    >
                                        {ach.link ? (
                                            <div onClick={() => handleAchievementClick(ach)} className="block h-full cursor-pointer">
                                                <div className="flex items-start gap-4 p-4 h-full rounded-2xl bg-background/50 border border-border/50 hover:bg-background hover:border-primary/50 transition-all cursor-pointer">
                                                    <ach.icon size={32} className="text-primary mt-1 shrink-0 group-hover:text-accent transition-colors" />
                                                    <div>
                                                        <h4 className="font-bold text-xl leading-tight mb-2 flex items-center justify-between gap-2 text-text-primary">
                                                            {ach.title}
                                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs border border-accent/30 text-accent px-2 py-0.5 rounded-full">View</span>
                                                        </h4>
                                                            <p className="text-text-secondary text-base mb-3 leading-relaxed tracking-wide">
                                                                {ach.title === "LeetCode Specialist" && lcSolved 
                                                                    ? ach.desc.replace(/Solved \d+\+ Problems\./, `Solved ${lcSolved}+ Problems.`) 
                                                                    : ach.desc}
                                                            </p>
                                                            <span className="text-xs font-mono text-primary/70">{ach.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-start gap-4 p-4 h-full rounded-2xl bg-background/50 border border-border/50">
                                                <ach.icon size={32} className="text-primary mt-1 shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-xl leading-tight mb-2 text-text-primary">{ach.title}</h4>
                                                    <p className="text-text-secondary text-base mb-3 leading-relaxed tracking-wide">
                                                        {ach.title === "LeetCode Specialist" && lcSolved 
                                                            ? ach.desc.replace(/Solved \d+\+ Problems\./, `Solved ${lcSolved}+ Problems.`) 
                                                            : ach.desc}
                                                    </p>
                                                    <span className="text-xs font-mono text-primary/70">{ach.date}</span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
}
