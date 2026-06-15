import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { journey } from "@/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/Reveal";

export default function Journey() {
  return (
    <section id="journey" className="container scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        index="03"
        subtitle="My Journey"
        title="My journey, one checkpoint at a time"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Garis vertikal timeline — satu rel lurus untuk semua titik */}
        <div className="absolute bottom-3 left-[15px] top-9 w-px bg-gradient-to-b from-primary via-border to-transparent md:left-[19px] md:top-10" />

        <ol className="space-y-8 md:space-y-10">
          {journey.map((item, i) => (
            <li key={item.year} className="relative pl-12 md:pl-16">
              {/* Titik checkpoint pada garis */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "backOut" }}
                className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center md:h-10 md:w-10"
              >
                <span className="absolute h-3.5 w-3.5 animate-ping rounded-full bg-primary/40" />
                <span className="relative h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />
              </motion.span>

              {/* Kartu */}
              <motion.div
                initial={{ opacity: 0, x: 32, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_18px_50px_-25px_hsl(var(--primary)/0.45)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-block rounded-full bg-primary/15 px-3 py-1 font-mono text-sm font-semibold text-primary">
                    {item.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    {item.place}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
