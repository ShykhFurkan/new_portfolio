"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Monitor, Code, Brain, PenTool, Smartphone } from "lucide-react";

const services = [
    {
        title: "Website Designing",
        description: "Crafting visually stunning and user-centric designs that leave a lasting impression.",
        icon: <PenTool className="h-8 w-8 text-primary" />
    },
    {
        title: "Website Creation",
        description: "Building robust, scalable, and high-performance websites using modern technologies.",
        icon: <Monitor className="h-8 w-8 text-primary" />
    },
    {
        title: "Custom Softwares",
        description: "Tailored software solutions to address your unique business challenges and workflows.",
        icon: <Code className="h-8 w-8 text-primary" />
    },
    {
        title: "Logos & Branding",
        description: "Creating memorable brand identities that resonate with your target audience.",
        icon: <Smartphone className="h-8 w-8 text-primary" />
    },
    {
        title: "AI Models",
        description: "Developing and integrating intelligent AI models to automate and enhance your processes.",
        icon: <Brain className="h-8 w-8 text-primary" />
    }
];

export function Services() {
    return (
        <SectionWrapper id="services">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive solutions for your digital needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <GlassCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                        <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
