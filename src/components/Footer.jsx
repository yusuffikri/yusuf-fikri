import { ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">
              {profile.name}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {profile.role} — building modern & user-friendly web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
