# Ido Cohen — software engineering portfolio

A responsive portfolio built with HTML, CSS and vanilla JavaScript. Content is based on my résumé and the linked public project source.

## Run locally

```sh
python -m http.server 8080
```

Open http://localhost:8080. No package installation or build is required.

## Maintain

- Content: `index.html`; styling: `index.css`; interactive project examples: `index.js`.
- Motion respects `prefers-reduced-motion`; links and controls support keyboard use.
- Project example images link to an immutable commit of the public TheUnseenView repository. Credit belongs to the two-student project team. These are existing outputs, not new screenshots.
- The résumé contact link opens an email request. The old PDF in `documents/` is historical and is no longer linked by the site.
- The current page needs only the three root index files and internet access for Google Fonts and the public project images. System font fallbacks preserve readability if fonts are unavailable.
- Legacy image, font and audio assets are retained for reversibility and are not loaded by this page.

## Hosting and custom domain

The live portfolio is https://ido-cohen.github.io/ on GitHub Pages (main branch, repository root, HTTPS enforced). The separate domain https://ido.cohen.to/ was found serving Home Assistant on 12 November 2026.

Do not change DNS or the reverse proxy until Home Assistant's alternative HTTPS address and authentication have been verified. Preserve unrelated services and mail records. Once the custom domain is safely routed to the portfolio, update the canonical and Open Graph URLs and GitHub Pages custom-domain setting together.

Never commit home-server configuration or credentials to this repository.
