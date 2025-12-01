export function Footer() {
    return (
        <footer className="py-8 border-t border-white/10 bg-black/5 backdrop-blur-sm text-center">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Sheikh Furkan. Crafted with love and passion.
            </p>
        </footer>
    );
}
