# MaxyLAND, Developer Showcase

Portfolio of MaxyLAND (https://maxyland.games): games, tools and experience, in English and Spanish. Built with [Astro](https://astro.build) as a static site and served by Apache on IONOS.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Add a project

Each game or tool is one YAML file in `src/content/projects/`. Copy `double-trip.yaml`, rename it (the file name becomes the URL slug) and edit it:

- `kind`: `game`, `tool` or `web`. Tools appear under "Tools & prototypes"; games and webs appear under "Projects".
- `status`: `released`, `in-development` or `prototype`.
- `order`: lower numbers show first.
- Text fields have an `en` and an `es` version.
- Images go in `src/assets/projects/<slug>/` and are referenced relative to the YAML file. Videos go in `public/media/<slug>/`.

The home page and the project page (`/projects/<slug>/` and `/es/proyectos/<slug>/`) are generated automatically. Steam review numbers are fetched at build time.

## Languages

- `/` is English, `/es/` is Spanish.
- `public/.htaccess` sends visitors whose browser prefers Spanish from `/` to `/es/`. The language switch stores a `lang` cookie that always wins, and a small script repeats the check when `.htaccess` is not available.

## Files that must stay at the domain root

`public/privacy.html`, `public/privacidad.html` (also served as `/privacy` and `/privacidad`) and `public/app-ads.txt` are referenced by store listings and AdMob. Keep their names.

## Deploy

`.github/workflows/deploy.yml` builds and uploads `dist/` over SFTP on every push to `main`. It stays off until you add, in the GitHub repository settings:

- Variable `DEPLOY_ENABLED` = `true`
- Secrets `IONOS_SFTP_HOST`, `IONOS_SFTP_USER`, `IONOS_SFTP_PASSWORD`, `IONOS_SFTP_PATH`

Without it, run `npm run build` and upload the contents of `dist/` (including the hidden `.htaccess`) to the web root.

## Design

- `PRODUCT.md`: who the site is for and what must stay true.
- `DESIGN.md`: the visual system (tokens, components, motion).
