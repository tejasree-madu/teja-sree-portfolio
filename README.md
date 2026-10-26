# Madu Teja Sree — AI Engineer Portfolio

A responsive, single-page portfolio built with Next.js, React, TypeScript, Lucide icons, and custom CSS. It is ready to deploy on Vercel.

## Run locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this project folder.
3. Open a terminal inside the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Create a new repository on GitHub.
2. Upload all files in this folder to the repository (keep `app/`, `public/`, and `package.json` at the root).
3. Sign in at https://vercel.com/ and choose **Add New → Project**.
4. Import your GitHub repository.
5. Keep the detected Next.js settings and click **Deploy**.

### Option B — Vercel CLI

```bash
npm install
npm install -g vercel
vercel
```

Follow the prompts. For a production deployment, run `vercel --prod`.

## Personalize before publishing

In `app/page.tsx`, replace the placeholder LinkedIn and GitHub URLs in the Contact section with your real profile URLs. Add project repository links only for repositories you want to share publicly.

The résumé from the supplied PDF is included as `public/Teja_Sree_Resume.pdf` and linked from the hero section.

## Notes

- The project content is based on the supplied résumé.
- Project cards currently describe work but do not claim unprovided live demos or public source-code repositories.
- Google Fonts are loaded from Google Fonts; if you prefer fully local fonts, replace the import in `app/globals.css`.
