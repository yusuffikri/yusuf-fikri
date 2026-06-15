import { motion } from "framer-motion";
import { ArrowDownRight, Linkedin, Send, Mail, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const statIcons = {
  Experience: Briefcase,
  Education: GraduationCap,
  Interest: Lightbulb,
};
import { profile, stats } from "@/data";
import { Button } from "@/components/ui/button";
import photo from "@/assets/photo.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="container relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Foto dalam bingkai membulat di atas, nama & deskripsi di bawahnya */}
          <motion.div variants={item} className="mt-9 flex justify-center">
            <div className="w-56 sm:w-64 md:w-72">
              <img
                src={photo}
                alt="Photo of Yusuf Fikri Mustanir"
                draggable="false"
                className="h-auto w-full select-none object-contain"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="relative mt-6 whitespace-nowrap font-poppins text-[24px] font-extrabold leading-[1.1] tracking-tight text-foreground"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" href="#projects" onClick={(e) => scrollTo(e, "#projects")}>
              View Projects <ArrowDownRight size={18} />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center justify-center gap-2">
            {[
              { icon: Mail, href: profile.socials.email, label: "Email", external: false },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", external: true },
              { icon: Send, href: profile.socials.telegram, label: "Telegram", external: true },
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
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.9 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-card/40 py-2 backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:py-6 md:mt-20"
        >
          {stats.map((s) => {
            const Icon = statIcons[s.label];
            return (
              <div key={s.label} className="flex flex-col items-center px-5 py-4 text-center sm:py-0">
                {Icon && (
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon size={20} />
                  </span>
                )}
                <div className="font-poppins text-sm font-bold uppercase tracking-wide text-primary md:text-base">
                  {s.label}
                </div>
                <div className="mt-1.5 text-sm text-muted-foreground md:text-base">{s.value}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
