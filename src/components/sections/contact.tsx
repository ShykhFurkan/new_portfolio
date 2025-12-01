"use client";

import { useState, useRef } from "react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "@/lib/email-config";
import { cn } from "@/lib/utils";

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus("idle");

        try {
            await emailjs.sendForm(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_ID,
                formRef.current,
                EMAIL_CONFIG.PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind? Let&apos;s build something beautiful together.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 font-serif">Contact Info</h3>
                        <p className="text-muted-foreground mb-8">
                            I&apos;m currently available for freelance work and open to full-time opportunities.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">shykhfurkan@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium">+91 7780940317</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium">Anantnag, Kashmir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GlassCard className="p-8">
                    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="from_name" className="text-sm font-medium">Name</label>
                            <input
                                id="from_name"
                                name="from_name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="from_email" className="text-sm font-medium">Email</label>
                            <input
                                id="from_email"
                                name="from_email"
                                type="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-full py-3 rounded-lg font-medium transition-all shadow-lg flex items-center justify-center gap-2",
                                status === "success" ? "bg-green-600 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20",
                                loading && "opacity-70 cursor-not-allowed"
                            )}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : status === "success" ? (
                                <>
                                    <CheckCircle className="h-4 w-4" />
                                    Message Sent!
                                </>
                            ) : status === "error" ? (
                                <>
                                    <AlertCircle className="h-4 w-4" />
                                    Failed. Try again.
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </GlassCard>
            </div>
        </SectionWrapper>
    );
}
