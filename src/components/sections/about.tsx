"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code, Palette, Terminal, Cpu, User } from "lucide-react";

import Image from "next/image";

export function About() {
    return (
        <SectionWrapper id="about">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">About Me</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A journey through code, design, and the spaces in between.
                </p>
            </div>

            <BentoGrid className="max-w-5xl mx-auto">
                <BentoGridItem
                    title="Who I Am"
                    description="I&apos;m a developer who loves to craft beautiful interfaces and robust systems. My background in engineering gives me a unique perspective on problem-solving."
                    header={
                        <div className="relative w-full h-60 rounded-xl overflow-hidden">
                            <Image
                                src="/images/about/me.png"
                                alt="Sheikh Furkan"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    }
                    icon={<User className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-2"
                />
                <BentoGridItem
                    title="Design Sensibility"
                    description="I believe that good design is as important as good code. I strive to create experiences that are both functional and aesthetically pleasing."
                    header={
                        <div className="relative w-full h-40 rounded-xl overflow-hidden">
                            <Image
                                src="/images/about/design.png"
                                alt="Design"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    }
                    icon={<Palette className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />
                <BentoGridItem
                    title="Tech Stack"
                    description="Next.js, TypeScript, Tailwind, Three.js, Node.js, and more. I&apos;m always learning new tools to improve my craft."
                    header={
                        <div className="relative w-full h-40 rounded-xl overflow-hidden">
                            <Image
                                src="/images/about/techstack.png"
                                alt="Tech Stack"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    }
                    icon={<Code className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-1"
                />
                <BentoGridItem
                    title="Engineering"
                    description="Building scalable and performant applications is my forte. I pay attention to the details that matter."
                    header={
                        <div className="relative w-full h-60 rounded-xl overflow-hidden">
                            <Image
                                src="/images/about/engineering.png"
                                alt="Engineering"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    }
                    icon={<Cpu className="h-4 w-4 text-neutral-500" />}
                    className="md:col-span-2"
                />
            </BentoGrid>
        </SectionWrapper>
    );
}
