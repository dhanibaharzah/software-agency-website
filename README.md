# Northstar — Software Agency Website

Marketing site for **Northstar**, an independent digital studio that builds products, brands, and experiences.

The homepage is a single scrolling page: hero, selected work, services, manifesto, and a contact CTA.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router) + React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/) (Base UI / Nova)
- [pnpm](https://pnpm.io/)
- [Vercel Analytics](https://vercel.com/analytics) in production

## Site content

| Section | What it covers |
| --- | --- |
| Hero | Studio positioning — “We build the next chapter.” |
| Work | Case cards: Morrow (fintech), Northstar (health), Luma (culture) |
| Services | Product strategy, design & experience, engineering |
| About | Studio manifesto |
| Contact | `hello@northstar.studio` |

Palette is a red-velvet theme: ink `#241014`, paper `#f4efeb`, accent `#9f3042`. Type is Space Grotesk with DM Mono for labels.

## Project layout

```
app/
  layout.tsx      # Metadata, favicons, analytics
  page.tsx        # Homepage
  globals.css     # Theme tokens and layout styles
components/ui/    # shadcn primitives (Button is unused on the homepage)
lib/utils.ts      # `cn()` class helper
public/           # Icons
```

## Getting started

Requires Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Command |
| --- | --- |
| Dev server | `pnpm dev` |
| Production build | `pnpm build` |
| Serve build | `pnpm start` |

## Notes

- The homepage is a static client-facing page; there is no CMS or form backend. Contact is a `mailto:` link.
- Social links in the footer currently point at the work section as placeholders.
- Images are unoptimized in `next.config.mjs`, which is convenient for static hosting.
