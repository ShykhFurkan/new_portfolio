"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "VS Code", "Vercel"] },
];

export function Skills() {
    return (
        <SectionWrapper id="skills">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Skills</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    The tools and technologies I use to bring ideas to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {skills.map((skillGroup, index) => (
                    <GlassCard key={skillGroup.category} className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, i) => (
                                <motion.span
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + i * 0.05 }}
                                    className="px-3 py-1 rounded-full bg-secondary/10 text-black dark:text-white text-sm border border-secondary/20 hover:bg-secondary/20 transition-colors cursor-default"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
