# GitHub Pages deployment

The FOCUS site is published at `https://archris05.github.io/` from the `Archris05.github.io` repository.

The workflow in `.github/workflows/deploy-focus.yml` builds the Astro site and deploys the contents of `dist/` to GitHub Pages whenever `main` is updated. In repository settings, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. Astro uses the root path locally and in production.