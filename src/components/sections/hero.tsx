"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tight text-foreground drop-shadow-sm">
                        Sheikh Furkan
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-xl md:text-3xl text-muted-foreground max-w-2xl mb-12 font-light"
                >
                    Crafted Motion, Engineered Warmth.
                    <span className="block text-base md:text-lg mt-4 opacity-80 font-sans">
                        Bridging the gap between engineering and visual expression.
                    </span>
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-8 left-0 right-0 flex justify-center"
            >
                <div className="animate-bounce flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
                    <div className="w-[1px] h-12 bg-muted-foreground/50"></div>
                </div>
            </motion.div>
        </section>
    );
}
