# Kibria Portfolio — GitHub Pages build (path: /portfolio/)

## Live URL
https://abdullaalkibria.github.io/portfolio/

## Steps
1. Create repo named **portfolio** in your GitHub account.
2. Copy this project into it. Then:
   ```bash
   npm ci
   npm run build
   git init && git branch -M main
   git add . && git commit -m "init"
   git remote add origin https://github.com/abdullaalkibria/portfolio.git
   git push -u origin main
   ```
3. In **Settings → Pages**, set Source to **GitHub Actions**. The included workflow will publish `dist/` automatically on each push to `main`.

Notes:
- `vite.config.ts` sets `base: '/portfolio/'`.
- Public assets (photo, CV) are referenced using `import.meta.env.BASE_URL` so links resolve correctly under `/portfolio/`.
