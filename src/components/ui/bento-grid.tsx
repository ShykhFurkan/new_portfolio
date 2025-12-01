import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    return (
        <GlassCard
            className={cn(
                "row-span-1 flex flex-col justify-between space-y-4 hover:shadow-xl transition duration-200 cursor-pointer",
                className
            )}
            onClick={onClick}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-2 mt-2 text-xl">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </GlassCard>
    );
};
