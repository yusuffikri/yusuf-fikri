# Yusuf Fikri Mustanir — Personal Portfolio

Landing page portofolio personal yang modern, responsif, dan ramah pengguna.
Dibangun ulang dari [yusuffikri.github.io](https://yusuffikri.github.io/) dengan
desain yang lebih segar dan animasi yang halus.

## Tech Stack

- **React** (Vite) — library UI & dev server cepat
- **Tailwind CSS** + komponen bergaya **shadcn/ui** — styling sistematis
- **Framer Motion** — animasi & micro-interaction
- **lucide-react** — ikon

## Fitur

- Desain gelap premium dengan aksen lime, tekstur grain, dan grid background
- Navigasi smooth-scroll yang otomatis menyorot section aktif
- Section **My Journey** dalam bentuk **timeline checkpoint** beranimasi
- Sepenuhnya responsif (mobile, tablet, desktop)
- Konten terpusat & mudah diedit di `src/data.js`

## Menjalankan Secara Lokal

```bash
npm install      # pasang dependensi
npm run dev      # jalankan dev server (http://localhost:5173)
npm run build    # build untuk produksi (folder dist/)
npm run preview  # pratinjau hasil build
```

## Mengubah Konten

Semua teks, daftar keahlian, timeline perjalanan, proyek, dan tautan sosial
ada di **`src/data.js`**. Cukup edit file tersebut tanpa menyentuh komponen.

Ganti juga `email`, `resumeUrl`, dan tautan sosial di objek `profile`.

## Deploy ke Vercel

Project ini sudah siap untuk Vercel (lihat `vercel.json`).

**Opsi A — via Dashboard (paling mudah):**

1. Push repo ini ke GitHub/GitLab.
2. Buka [vercel.com/new](https://vercel.com/new) → Import repository.
3. Vercel otomatis mendeteksi framework **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Klik **Deploy**. Selesai 🎉

**Opsi B — via CLI:**

```bash
npm i -g vercel
vercel          # deploy preview
vercel --prod   # deploy ke produksi
```

Tidak ada environment variable yang dibutuhkan.
