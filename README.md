# Utkranti Yantra Website

A Next.js 15 App Router website for Utkranti Yantra with TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod validation, Lucide icons, dynamic SEO metadata, sitemap, robots.txt, structured schema data, and a contact API route.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run build
npm run start
```

## Environment variables

Create `.env.local` when deploying or testing email notifications:

```env
NEXT_PUBLIC_SITE_URL=https://utkrantiyantra.com
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM_EMAIL="Utkranti Yantra <noreply@utkrantiyantra.com>"
```

Email notification is optional. The contact route still validates and accepts inquiries when Resend variables are not set.

## Replacing images

All editable site artwork now lives in one common folder:

```text
public/images/catalog/
```

To replace an image later, keep the same filename and drop in your final product photo or SVG. The product catalog points to files such as:

- `public/images/catalog/product-smart-touch-switch.svg`
- `public/images/catalog/product-smart-switch-16a.svg`
- `public/images/catalog/product-relay-6ch-10a.svg`
- `public/images/catalog/product-wifi-gateway.svg`
- `public/images/catalog/hero-industrial-product-lab.svg`
- `public/images/catalog/dashboard-mqtt-operations.svg`

Product image paths are managed in `src/data/products.ts`. Service images use the `service-{slug}.svg` naming convention in `src/data/services.ts`.

## Theme

The UI uses a light industrial technology theme with white glass panels, cyan accents, light grid/radial backgrounds, and product-oriented illustration assets.
