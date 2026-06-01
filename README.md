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

## Product images

Product images are now sourced from internet product pages that match the actual product category/name as closely as possible. The URLs live in:

```text
src/data/products.ts
public/data/products.json
```

Each product entry also includes an `imageSource` label so the detail page can show where the reference product image comes from.

### Replacing with Utkranti Yantra final product photos

When final product photos are available, put them in the common replacement folder:

```text
public/images/catalog/
```

Then replace the relevant `image` value in `src/data/products.ts` with a local path such as:

```ts
image: "/images/catalog/product-smart-touch-switch.jpg"
```

The current local catalog folder is still used for hero, dashboard, service, industry, portfolio, blog, and team artwork.

## Theme

The UI uses a light industrial technology theme with white glass panels, cyan accents, light grid/radial backgrounds, and product-oriented illustration assets.
