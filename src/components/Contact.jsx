import { Mail, Send, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <div className="glow-ring relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-24">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
          <div className="relative mx-auto max-w-2xl">
            <span className="font-mono text-sm text-primary">05 — Contact</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
              Let's collaborate & bring your ideas to life
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground text-balance">
              Have an interesting project or just want to say hello? I'm always open to a
              new conversation.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" href={`mailto:${profile.email}`}>
                <span className="inline-flex items-center gap-2">
                  <Mail size={18} /> {profile.email}
                </span>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                href={profile.resumeUrl}
                download="CV-Yusuf-Fikri-Mustanir.pdf"
              >
                <span className="inline-flex items-center gap-2">
                  Unduh CV <ArrowUpRight size={18} />
                </span>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2">
              {[
                { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", external: true },
                { icon: Send, href: profile.socials.telegram, label: "Telegram", external: true },
                { icon: Mail, href: profile.socials.email, label: "Email", external: false },
              ].map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={label}
                  className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
