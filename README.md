<<<<<<< HEAD
# claude-portfolio-zk
=======
# Ezequiel Dominguez Pace — Product Design Portfolio

A responsive portfolio focused on product design, AI, healthcare workflows, and design systems. Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style components, and Motion.

## Run locally

Requirements: Node.js 18+ and pnpm.

1. Install dependencies with `pnpm install`.
2. Copy `.env.example` to `.env.local`.
3. Start the local server with `pnpm dev` and open <http://localhost:3000>.

The portfolio works without environment variables. The contact form sends messages to the recipient address configured in the server route using FormSubmit.

## Edit portfolio content

- Profile, experience, project summaries, FAQs, capabilities, education, and certifications: [src/data/portfolio.ts](./src/data/portfolio.ts)
- Homepage sections and layout: [src/components/portfolio-sections.tsx](./src/components/portfolio-sections.tsx)
- Responsive styles and color tokens: [src/app/globals.css](./src/app/globals.css) and [src/app/portfolio.css](./src/app/portfolio.css)
- SEO title, metadata, and site URL: [src/app/layout.tsx](./src/app/layout.tsx)

Write only verifiable project outcomes. Case-study cards intentionally distinguish documented objectives and design work from measured results.

## Contact form

The server route forwards validated submissions to `zeque77@gmail.com` through [FormSubmit](https://formsubmit.co/); no API key or form endpoint is needed. On first use, FormSubmit sends a one-time confirmation email to the recipient. Confirm that email to activate delivery. The visitor’s email is included for replies.

Set `NEXT_PUBLIC_SITE_URL` to the canonical public website URL in production.

Never commit `.env.local` or secrets. The supplied LinkedIn export, project PDFs, and source images live in the ignored local `Data/` folder; they are source material and are not part of the deployed website.

## Build and check

- `pnpm lint` — lint the project
- `pnpm build` — create a production build
- `pnpm start` — serve the production build locally

## Deploy with Netlify

1. Push this project to a GitHub repository you own, then import that repository in Netlify.
2. Let Netlify detect the Next.js framework and use `pnpm build` as the build command. Keep Netlify’s Next.js runtime handling the output directory.
3. Add `NEXT_PUBLIC_SITE_URL` in the site’s environment-variable settings, then redeploy.
4. Confirm FormSubmit’s one-time activation email, production contact delivery, and social preview metadata before sharing the site.

This project is published from the personal repository `Zeque77/claude-portfolio-zk`. The starter template’s Git history is retained only in a local backup branch and is not part of the published `main` branch.

## Project structure

- `src/app/` — App Router pages, route handlers, SEO routes, and global styles
- `src/components/` — portfolio sections and interactive UI
- `src/data/portfolio.ts` — editable portfolio content
- `public/` — public static assets
- `Data/` — ignored local source documents; never deployed

## License

The starter code retains the license provided in [LICENSE](./LICENSE). Portfolio writing and supplied source documents are personal materials.
>>>>>>> e62073b0 (Create personal portfolio website)
