import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading index="04" subtitle="Projects" title="Selected work I've built" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <a
              href="https://yusuffikri.github.io/"
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  project.accent
                )}
              />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
