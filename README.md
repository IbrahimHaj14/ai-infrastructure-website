# Chromastic

The complete source for Chromastic, a light, product-focused AI workstation and private infrastructure website for the Middle East. Built with React and Vite, with Radix UI components, React Spring transitions and self-hosted Geist typography.

## Run locally

Install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

The development server opens at `http://127.0.0.1:4173`. To build and preview production output:

```sh
npm run build
npm run preview
```

The build creates `dist/` with 21 page routes and a 404 page. Dependencies are pinned by `package-lock.json`. No environment variables, Sites plugin, account or API credentials are required to build this website.

## Deploy and connect a domain

The repository contains source and all imagery. Generated build output and installed dependencies are excluded from Git; the hosting provider builds them from the source.

For Vercel, import this GitHub repository as a new project. The included `vercel.json` sets the Vite framework, `npm run build` command and `dist` output directory. Use the repository root as the project root.

After deployment, add your domain in the project's domain settings and apply the DNS records Vercel shows at your domain registrar. Use the actual records shown for your project.

Official setup references: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite) and [Adding a custom domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain).

Other static hosts can use the same settings:

| Setting | Value |
| --- | --- |
| Project root | Repository root |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Publish directory | `dist` |

Serve the generated route directories and their `index.html` files. Keep the domain at the site root; links and assets use root-relative paths.

## Source map

- `src/App.jsx`: shared UI, page components, navigation and comparison.
- `src/styles.css`: responsive light design system and guided-flow styles.
- `src/data.js`: system classes, workloads, services and articles.
- `src/planner.js`: separate Personal and Business drafts, validation, review and brief downloads.
- `public/assets/`: production WebP product renders and favicon.
- `source-assets/`: original PNG renders and generation notes.
- `scripts/prepare-routes.mjs`: generated static route shells and page titles.
- `design-research-v2.md`: visual research behind the current design.

## Current functionality

The website includes Personal and Business experiences, guided planning flows, a curated systems catalogue, system detail pages, workload selection, comparison, services, articles, About, Contact, Privacy and Terms. Navigation, filters and dialogs support keyboard use; motion respects reduced-motion preferences.

Quotation briefs stay in page memory and can be downloaded to the visitor's device. They are not submitted to a backend. Connect server validation and enquiry delivery, and finalise company contact and legal details before enabling live enquiries. `brand.quoteEndpoint` is a future integration point.

Hardware imagery is conceptual and unbranded. Configuration ranges are indicative. Final compatibility, components, pricing and availability require human review.

Supplier products, inventory, payments, country-specific content and Arabic/RTL can be added later without turning the curated system classes into a parts catalogue.
