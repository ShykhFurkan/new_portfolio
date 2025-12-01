"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/Furkan_Mushtaq_Resume.pdf" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
                "bg-white/30 dark:bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-white/20 dark:supports-[backdrop-filter]:bg-black/20 shadow-sm"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-foreground relative group z-50">
                    Furkan
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                            rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile Navigation Controls */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <Link
                        href="/Furkan_Mushtaq_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-foreground/80 hover:text-primary transition-colors"
                        aria-label="Resume"
                    >
                        <FileText className="w-5 h-5" />
                    </Link>
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground/80 hover:text-primary transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 pt-24 md:hidden shadow-lg"
                        >
                            <nav className="flex flex-col gap-6">
                                {navItems.filter(item => item.name !== "Resume").map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
