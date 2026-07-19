# Samuel Olayinka — Portfolio

A Next.js + Tailwind CSS portfolio site, styled as a trading-terminal /
market-ticker themed one-pager.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add your picture

Drop your photo into the `public` folder and name it `profile.jpg`:

```
public/profile.jpg
```

It will appear automatically in the hero section's profile badge — no
code changes needed. Until you add it, a placeholder "SO" badge is shown.

(You can also use a `.png` — just rename the file to `profile.jpg`, or
edit the `src` in `components/ProfilePhoto.tsx` if you'd rather keep a
different file name/extension.)

## Editing content

All copy lives in the `components/` folder as plain data arrays/JSX —
easy to find and edit:

- `components/Hero.tsx` — headline, intro, stats
- `components/About.tsx` — bio
- `components/Products.tsx` — Bintrest, VixGPT, Aipolypredict
- `components/Stack.tsx` — tech stack grid
- `components/Markets.tsx` — market verticals
- `components/Contact.tsx` — email & phone

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero
config needed, it's a standard Next.js app.
