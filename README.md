# Portfolio

Personal portfolio website built with React and Vite.

## Local development

```sh
npm ci
npm run dev
```

## GitHub Pages

The site is configured for `https://sada335.github.io/portfolio/`. The
`Deploy to GitHub Pages` workflow builds and publishes the site whenever
changes are pushed to `main`.

In the repository's **Settings → Pages**, set the build and deployment source
to **GitHub Actions**. The `Deploy to GitHub Pages` workflow publishes the
Vite-generated `build/` directory; do not enable a branch-root or Jekyll
workflow, which would publish the unbuilt source instead. After the first
successful workflow run, the site will be available at the URL above.
