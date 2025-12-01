"use client";

export function Background() {
    return (
        <div className="fixed inset-0 -z-50 h-full w-full bg-background">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"
                style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, #000 70%, transparent 100%)" }}
            />

            {/* Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Subtle Gradient Spot */}
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
        </div>
    );
}
