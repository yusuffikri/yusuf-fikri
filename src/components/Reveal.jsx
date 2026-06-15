import { motion } from "framer-motion";

// Pembungkus animasi reveal saat elemen masuk ke viewport.
export function Reveal({ children, delay = 0, y = 24, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <span className="font-mono text-sm text-primary">
          {index} <span className="text-muted-foreground">— {subtitle}</span>
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
