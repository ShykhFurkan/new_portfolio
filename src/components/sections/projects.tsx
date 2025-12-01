"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";

import Image from "next/image";

const projects = [
    {
        title: "Smart Hire",
        description: "AI-powered application to streamline hiring and job search processes. (In Process)",
        tags: ["Next.js", "Node.js", "MongoDB", "AI"],
        image: "/images/projects/smart_hire.png",
        color: "from-primary/40 to-secondary/40"
    },
    {
        title: "Bitez POS",
        description: "Comprehensive management application for restaurants.",
        tags: ["Flask", "Python", "SQL"],
        image: "/images/projects/bitez.png",
        color: "from-secondary/40 to-accent/40"
    },
    {
        title: "Agency Management",
        description: "Task and workflow management system for agencies.",
        tags: ["Flask", "Python", "Dashboard"],
        image: "/images/projects/agency.png",
        color: "from-accent/40 to-primary/40"
    },
    {
        title: "Logos & Brand Identity",
        description: "Creative logo design and brand identity development.",
        tags: ["Design", "Branding", "Illustrator"],
        image: "/images/projects/logos.png",
        color: "from-primary/40 to-accent/40"
    }
];

export function Projects() {
    return (
        <SectionWrapper id="projects">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Selected Works</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A showcase of my recent projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="group p-0 overflow-hidden h-80 md:h-96 flex flex-col relative border-none">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                        <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                                {project.description}
                            </p>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 transform translate-y-4 group-hover:translate-y-0">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
