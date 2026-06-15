import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, X, Check, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

// Nilai warna disimpan sebagai komponen HSL ("H S% L%") agar cocok dengan
// token CSS variable yang dipakai Tailwind (mis. hsl(var(--primary))).
const PRIMARY_COLORS = [
  { id: "violet", label: "Violet", value: "270 76% 53%", fg: "0 0% 100%" },
  { id: "green", label: "Green", value: "142 71% 45%", fg: "0 0% 100%" },
  { id: "blue", label: "Blue", value: "232 78% 50%", fg: "0 0% 100%" },
  { id: "pink", label: "Pink", value: "330 75% 52%", fg: "0 0% 100%" },
  { id: "red", label: "Red", value: "0 74% 51%", fg: "0 0% 100%" },
  { id: "yellow", label: "Yellow", value: "45 92% 51%", fg: "240 10% 6%" },
  { id: "lime", label: "Lime", value: "74 84% 63%", fg: "240 10% 4%" },
];

const MODES = {
  dark: {
    "--background": "240 10% 4%",
    "--foreground": "60 9% 96%",
    "--card": "240 8% 7%",
    "--card-foreground": "60 9% 96%",
    "--secondary": "240 6% 12%",
    "--secondary-foreground": "60 9% 96%",
    "--muted": "240 6% 12%",
    "--muted-foreground": "240 5% 60%",
    "--border": "240 6% 16%",
    "--input": "240 6% 16%",
  },
  light: {
    "--background": "0 0% 100%",
    "--foreground": "240 10% 8%",
    "--card": "0 0% 100%",
    "--card-foreground": "240 10% 8%",
    "--secondary": "240 5% 96%",
    "--secondary-foreground": "240 10% 12%",
    "--muted": "240 5% 96%",
    "--muted-foreground": "240 4% 42%",
    "--border": "240 6% 88%",
    "--input": "240 6% 88%",
  },
};

const STORAGE = { primary: "yf-theme-primary", mode: "yf-theme-mode" };

function applyPrimary(color) {
  const r = document.documentElement;
  r.style.setProperty("--primary", color.value);
  r.style.setProperty("--accent", color.value);
  r.style.setProperty("--ring", color.value);
  r.style.setProperty("--primary-foreground", color.fg);
  r.style.setProperty("--accent-foreground", color.fg);
}

function applyMode(mode) {
  const r = document.documentElement;
  Object.entries(MODES[mode]).forEach(([k, v]) => r.style.setProperty(k, v));
}

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [primaryId, setPrimaryId] = useState("lime");
  const [mode, setMode] = useState("dark");

  // Pulihkan preferensi tersimpan saat pertama dimuat.
  useEffect(() => {
    const savedPrimary = localStorage.getItem(STORAGE.primary);
    const savedMode = localStorage.getItem(STORAGE.mode);
    const color = PRIMARY_COLORS.find((c) => c.id === savedPrimary);
    if (color) {
      setPrimaryId(color.id);
      applyPrimary(color);
    }
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
      applyMode(savedMode);
    }
  }, []);

  // Kunci scroll body saat panel terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const selectPrimary = (color) => {
    setPrimaryId(color.id);
    applyPrimary(color);
    localStorage.setItem(STORAGE.primary, color.id);
  };

  const selectMode = (m) => {
    setMode(m);
    applyMode(m);
    localStorage.setItem(STORAGE.mode, m);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Change theme"
        className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
      >
        <Palette size={18} />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Customize Your Theme"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X size={18} />
              </button>

              <h2 className="text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                Customize Your Theme
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-center text-sm text-muted-foreground">
                Change the primary and background color to your preference.
              </p>

              {/* Primary color */}
              <div className="mt-8">
                <h3 className="text-center text-sm font-bold tracking-wide">Primary Color</h3>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  {PRIMARY_COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => selectPrimary(color)}
                      aria-label={color.label}
                      aria-pressed={primaryId === color.id}
                      style={{ backgroundColor: `hsl(${color.value})` }}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110",
                        primaryId === color.id
                          ? "ring-2 ring-foreground ring-offset-2 ring-offset-card"
                          : "ring-1 ring-black/10"
                      )}
                    >
                      {primaryId === color.id && (
                        <Check size={16} style={{ color: `hsl(${color.fg})` }} strokeWidth={3} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background color */}
              <div className="mt-8">
                <h3 className="text-center text-sm font-bold tracking-wide">Background Color</h3>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => selectMode("light")}
                    aria-pressed={mode === "light"}
                    className={cn(
                      "flex h-16 items-center justify-center gap-2 rounded-2xl border bg-white font-medium text-zinc-900 transition-all",
                      mode === "light"
                        ? "border-primary ring-2 ring-primary"
                        : "border-black/10 hover:border-primary/60"
                    )}
                  >
                    <Sun size={18} />
                    {mode === "light" && <Check size={16} strokeWidth={3} />}
                  </button>
                  <button
                    type="button"
                    onClick={() => selectMode("dark")}
                    aria-pressed={mode === "dark"}
                    className={cn(
                      "flex h-16 items-center justify-center gap-2 rounded-2xl border bg-zinc-950 font-medium text-white transition-all",
                      mode === "dark"
                        ? "border-primary ring-2 ring-primary"
                        : "border-white/10 hover:border-primary/60"
                    )}
                  >
                    <Moon size={18} />
                    {mode === "dark" && <Check size={16} strokeWidth={3} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
