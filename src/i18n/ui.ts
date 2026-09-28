import type { Locale } from './routes';

/** Interface copy. Project copy lives in src/content/projects/*.yaml. */
const ui = {
  en: {
    meta: {
      homeTitle: 'MaxyLAND, game developer and web designer',
      homeDescription:
        'Portfolio of MaxyLAND: Double Trip, tools and websites. Games first, the web too.',
      notFoundTitle: 'Page not found | MaxyLAND',
    },
    nav: {
      label: 'Sections',
      about: 'About',
      projects: 'Projects',
      tools: 'Tools',
      contact: 'Contact',
      home: 'MaxyLAND, home',
      skip: 'Skip to content',
    },
    lang: { label: 'Language', switchTo: 'Leer en español' },
    hero: {
      title: 'I make games, tools and websites.',
      body: 'More than five years building games in Unity and drawing my own sprites. Double Trip, my first commercial game, is out now.',
      rows: [
        { label: 'Games', value: 'Unity, C#, sprite art in Photoshop' },
        { label: 'Web', value: 'HTML, CSS, JavaScript, PHP' },
        { label: 'Also', value: 'Python' },
        { label: 'Experience', value: '5+ years, nonstop' },
      ],
      contact: 'Contact',
    },
    projects: {
      title: 'Projects',
      view: (title: string) => `View ${title}`,
      released: 'Released',
      statusLabel: 'Status',
      reviews: 'Steam reviews',
      reviewsValue: (percent: number, total: number) => `${percent}% positive of ${total}`,
      watch: 'Play gameplay',
      pause: 'Pause gameplay',
      status: {
        released: 'Released',
        'in-development': 'In development',
        prototype: 'Prototype',
      },
    },
    tools: {
      title: 'Tools & prototypes',
      empty:
        'Mods, emulator utilities and other experiments will land here as they get ready. For now, the code lives on GitHub.',
      slots: ['Mod', 'Utility', 'Prototype'],
      github: 'See my GitHub',
    },
    contact: {
      title: 'Contact',
      body: 'Games first, websites too. Write to me with your idea: I read every message and take on what fits.',
      proposals: 'Projects and proposals',
      support: 'Player support',
      write: 'Write',
      copy: 'Copy',
      copied: 'Copied',
      profiles: 'Profiles',
    },
    footer: {
      privacy: 'Privacy policy',
      privacyHref: '/privacy',
    },
    project: {
      back: 'All projects',
      details: 'Details',
      platforms: 'Platforms',
      engine: 'Engine',
      credits: 'Credits',
      press: 'Press',
      screenshots: 'Screenshots',
      trailer: 'Trailer',
      playTrailer: 'Play trailer',
      gameplay: 'Gameplay',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      of: 'of',
      openImage: 'Open screenshot',
    },
    links: {
      steam: 'Steam',
      itch: 'itch.io',
      github: 'GitHub',
      web: 'Website',
      download: 'Download',
      youtube: 'YouTube',
      x: 'X',
      on: (title: string, place: string) => `${title} on ${place}`,
    },
    notFound: {
      title: 'This level does not exist.',
      body: 'The page you were looking for moved or never existed.',
      home: 'Back to the start',
    },
  },
  es: {
    meta: {
      homeTitle: 'MaxyLAND, desarrollador de videojuegos y web',
      homeDescription:
        'Portfolio de MaxyLAND: Double Trip, herramientas y webs. Primero videojuegos, también la web.',
      notFoundTitle: 'Página no encontrada | MaxyLAND',
    },
    nav: {
      label: 'Secciones',
      about: 'Sobre mí',
      projects: 'Proyectos',
      tools: 'Herramientas',
      contact: 'Contacto',
      home: 'MaxyLAND, inicio',
      skip: 'Saltar al contenido',
    },
    lang: { label: 'Idioma', switchTo: 'Read in English' },
    hero: {
      title: 'Hago videojuegos, herramientas y webs.',
      body: 'Más de cinco años creando juegos en Unity y dibujando mis propios sprites. Double Trip, mi primer juego comercial, ya está a la venta.',
      rows: [
        { label: 'Juegos', value: 'Unity, C#, sprites en Photoshop' },
        { label: 'Web', value: 'HTML, CSS, JavaScript, PHP' },
        { label: 'También', value: 'Python' },
        { label: 'Experiencia', value: 'Más de 5 años, sin parar' },
      ],
      contact: 'Contacto',
    },
    projects: {
      title: 'Proyectos',
      view: (title: string) => `Ver ${title}`,
      released: 'Lanzamiento',
      statusLabel: 'Estado',
      reviews: 'Reseñas en Steam',
      reviewsValue: (percent: number, total: number) => `${percent} % positivas de ${total}`,
      watch: 'Reproducir gameplay',
      pause: 'Pausar gameplay',
      status: {
        released: 'Publicado',
        'in-development': 'En desarrollo',
        prototype: 'Prototipo',
      },
    },
    tools: {
      title: 'Herramientas y prototipos',
      empty:
        'Aquí irán llegando mods, utilidades para emuladores y otros experimentos cuando estén listos. Mientras tanto, el código está en GitHub.',
      slots: ['Mod', 'Utilidad', 'Prototipo'],
      github: 'Ver mi GitHub',
    },
    contact: {
      title: 'Contacto',
      body: 'Primero videojuegos, también webs. Escríbeme con tu idea: leo todos los mensajes y acepto lo que encaja.',
      proposals: 'Proyectos y propuestas',
      support: 'Soporte para jugadores',
      write: 'Escribir',
      copy: 'Copiar',
      copied: 'Copiado',
      profiles: 'Perfiles',
    },
    footer: {
      privacy: 'Política de privacidad',
      privacyHref: '/privacidad',
    },
    project: {
      back: 'Todos los proyectos',
      details: 'Ficha',
      platforms: 'Plataformas',
      engine: 'Motor',
      credits: 'Créditos',
      press: 'Prensa',
      screenshots: 'Capturas',
      trailer: 'Tráiler',
      playTrailer: 'Ver tráiler',
      gameplay: 'Gameplay',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
      of: 'de',
      openImage: 'Abrir captura',
    },
    links: {
      steam: 'Steam',
      itch: 'itch.io',
      github: 'GitHub',
      web: 'Web',
      download: 'Descargar',
      youtube: 'YouTube',
      x: 'X',
      on: (title: string, place: string) => `${title} en ${place}`,
    },
    notFound: {
      title: 'Este nivel no existe.',
      body: 'La página que buscabas se ha movido o nunca existió.',
      home: 'Volver al inicio',
    },
  },
};

export type UI = (typeof ui)['en'];

export function t(locale: Locale): UI {
  return ui[locale];
}

export function formatMonthYear(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-GB', {
    month: 'long',
    year: 'numeric',
  }).format(date);
}
