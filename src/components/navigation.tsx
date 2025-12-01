"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {


    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
                "bg-white/30 dark:bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-white/20 dark:supports-[backdrop-filter]:bg-black/20 shadow-sm"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-foreground relative group">
                    Furkan
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
