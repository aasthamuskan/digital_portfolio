"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/app/data";

const CHALLENGES = [
    {
        id: "linkedin",
        platform: "LinkedIn",
        title: "LinkedIn Coding Challenge",
        description: "Documented my entire journey of solving complex Data Structures and Algorithms problems consistently. Shared deep insights, code snippets, and optimized problem-solving approaches with the entire developer community.",
        icon: Linkedin,
        link: PROFILE.socials.find(s => s.name === "LinkedIn")?.href || "#",
        color: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500"
    },
    {
        id: "instagram",
        platform: "Instagram",
        title: "Instagram Tech Challenge",
        description: "Building an engaging community of passionate developers by actively sharing byte-sized coding milestones, web development progress, and glimpses into my routine as a software engineer.",
        icon: Instagram,
        link: "https://instagram.com/", // Add your Instagram profile link here
        color: "from-pink-500/20 to-purple-500/20",
        iconColor: "text-pink-500"
    }
];

export default function SocialFootprintsSection() {
    return (
        <section id="social-footprints" className="relative py-24 bg-background overflow-hidden border-t border-border/20">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />
            
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-text-primary mb-6">
                        Social <span className="text-gradient hover:text-primary transition-colors">Footprints</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Beyond the IDE, I actively engage with the developer ecosystem by documenting my technical journey and milestones online.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CHALLENGES.map((challenge, index) => (
                        <motion.a
                            href={challenge.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={challenge.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative block p-8 rounded-[2rem] bg-card/60 backdrop-blur-md border border-border/60 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`p-4 rounded-2xl bg-background border border-border/50 shadow-sm ${challenge.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                                        <challenge.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <ArrowUpRight className="text-text-secondary group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-text-primary mb-4 font-display">
                                    {challenge.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed flex-1">
                                    {challenge.description}
                                </p>
                                
                                <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-text-primary tracking-wide">
                                    <span className="relative overflow-hidden cursor-pointer">
                                        View on {challenge.platform}
                                        <span className="absolute -bottom-1 left-0 w-full h-px bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
