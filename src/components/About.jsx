import { about } from "@/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading index="01" subtitle="About Me" title="A little story about me" />

      <Reveal className="mx-auto max-w-3xl">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
