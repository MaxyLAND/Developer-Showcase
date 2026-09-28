# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Astro with static output. The site is hosted on IONOS under a paid domain (maxyland.games); a static build runs on any IONOS plan, including shared hosting without a Node runtime. The user explicitly allowed replacing the previous hand-written HTML/CSS/JS entirely.

## Users

Two audiences, weighted equally:

- **Players and curious visitors** who discover a MaxyLAND game (from a store page, social media, press or word of mouth). Their job: understand what the game is in seconds and jump to Steam or itch.io.
- **People who might hire or collaborate** (game teams, studios, or someone who needs a website). Their job: judge skill and range from shipped work, then find a way to get in touch.

## Product Purpose

Personal portfolio and showcase for MaxyLAND, a solo developer. It presents shipped games, tools and experience, and promotes the games by linking out to their external pages. It is not a store: no payments, no accounts, nothing server-side.

Success: players click through to the store pages; potential collaborators come away knowing what MaxyLAND can build and how to reach them.

## Positioning

One person who ships the whole thing: programming, art (sprites drawn in Photoshop) and the web. Double Trip is a commercially released game on Steam and itch.io with 500+ sales, built by MaxyLAND with a collaborator for music, sound and level design. The site is itself proof of the web side of that skill set.

## Operating Context

- Bilingual, English and Spanish. The site should detect the browser language on arrival and always offer a manual switch that is remembered.
- The catalogue grows over time: the user will ask to add new games or projects with a future. Entries must be data-driven so adding one is a small edit.
- Game stores and the ad network reference files on the domain root: `privacy.html`, `privacidad.html` (also served without the `.html` extension via `.htaccess`) and `app-ads.txt`. These URLs must keep working after any migration.

## Capabilities and Constraints

- Main project: Double Trip.
- A section for other prototypes and code tools must exist and be ready to fill. The user tinkers and builds useful tools (examples they gave: a Minecraft mod, tools for Pokémon emulators). It is empty today and must look intentional while empty.
- Experience and skills section.
- Contact section. The user is open to commissions and work, both games and web, prioritizing video games, with no commitment: they decide what to answer and accept. Copy must not promise availability, response times or services.
- Contact channels (confirmed): `contact@maxyland.games` for general contact and proposals; `support@maxyland.games` for player support and help; GitHub `MaxyLAND` (https://github.com/MaxyLAND); X `@MaxyLAND_`; itch.io (https://maxyland.itch.io) and the Steam developer page. No contact form (no backend).
- Structure (confirmed): a home page plus one page per project. The home page gives each project a dedicated, compact section that stands out and leads to its project page.

## Brand Commitments

- Names: **MaxyLAND** (the developer brand, wordmark "MAXYLAND") and **MaxyLAND Games** (publisher name on stores).
- Slogan: "Web designer and game developer" / "Desarrollador web y de videojuegos".
- Logo: a hexagon formed by two SVG pieces, an M and an L (`img/logo-m.svg`, `img/logo-l.svg`), filled with the brand gradient cyan → green → a touch of yellow (currently `linear-gradient(53deg, #23ebe9 26%, #67d45f 70%, #ebfa56 96%)`). Cyan and green dominate; yellow is only an accent.
- The intro animation is a binding brand moment. Its essence: the two SVG pieces appear and form the logo, a white shine sweeps across it, then the word "MAXYLAND" appears progressively together with the slogan. It may be rebuilt for performance and mobile, but that sequence must survive.
- The site palette may change, but always in reference to the logo: a simple palette on a dark base.

## Evidence on Hand

- **Double Trip** (verified 2026-09-28 on Steam):
  - A cute tile-based sokoban about two friendly characters (jelly blobs) crossing an island archipelago: push rocks into holes, roll logs to build bridges, reach the exit portal.
  - Released 8 May 2025. Steam app 3414480 (https://store.steampowered.com/app/3414480/Double_Trip/) and itch.io (https://maxyland.itch.io/double-trip). €4.99, soundtrack bundle available. Windows, macOS, Linux; keyboard and gamepad.
  - Around 30 puzzles, 2-3 hours. Single player plus local 2-player co-op; customizable characters; explorable overworld; 9 Steam achievements.
  - Engine: Unity 2023 (confirmed by the user, 2026-09-28).
  - Credits: development, programming and art by MaxyLAND; music, sound and level design by Javier Reina Ruiz.
  - 500+ sales (stated by the user). Steam user reviews: 36, 100% positive (snapshot; the number changes).
  - Press: Thinky Games feature "Double Trip is the perfect Sokoban for beginners and those after a cosy break"; Anokturnus review (26 May 2025).
  - Media: Steam header, library hero, vertical capsule, logo, 6 screenshots at 1920×1080, Release and Announcement trailers; plus `small_gameplay.webm`, `letters_with_cloud.png`, `level_example.png` and `map_example.png` in the user's GitHub repo `MaxyLAND/repo-sources` (`maxyland-games/portfolio/doubletrip/`).
- **Experience** (stated by the user): 5+ years developing in Unity as a continuously active hobby; sprite creation in Photoshop; 5+ years programming with HTML, CSS, JavaScript, PHP, Python and C#, among others.
- **Brand assets**: `img/logo-m.svg`, `img/logo-l.svg`, `img/bright.png` (the white shine texture), `img/favicon.ico`, wordmark currently set in Bakbak One (`css/fonts/BakbakOne-Regular.ttf`).
- **Absences, never fabricate**: no testimonials, no client list, no employer history, no other released games yet, no published tools yet, no download or sales figures beyond "500+ sales".

## Product Principles

1. The work leads. Games and tools are the protagonists; the interface recedes around them.
2. Every project ends in a real destination: a store page, a repo or a download.
3. The brand is fixed ground. Logo, gradient and intro sequence are preserved; everything else is built to serve them.
4. Growth is a data edit. Adding a game or tool must never require redesigning a page.
5. Honest claims only. Numbers and quotes come from real sources and are dated where they can drift.

## Accessibility & Inclusion

- WCAG AA contrast on the dark base, in both languages.
- The intro must respect `prefers-reduced-motion` and must never block reading or navigation for returning visitors.
- Language auto-detection must never trap a visitor: the manual switch is always visible and persistent.
