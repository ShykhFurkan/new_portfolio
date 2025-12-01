import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg transition-all duration-500 hover:border-white/30 hover:bg-white/15 dark:border-white/10 dark:bg-black/10",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
                className
            )}
            {...props}
        >
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.06), transparent 40%)"
                }}
            />
            {children}
        </div>
    );
}
