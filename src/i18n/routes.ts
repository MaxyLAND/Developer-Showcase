export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function toLocale(value: string | undefined): Locale {
  return value === 'es' ? 'es' : 'en';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/** Every page kind the site has, with its path in each language. */
export type Route = { page: 'home' } | { page: 'project'; slug: string };

const projectSegment: Record<Locale, string> = { en: 'projects', es: 'proyectos' };

export function pathFor(route: Route, locale: Locale): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  switch (route.page) {
    case 'home':
      return `${prefix}/`;
    case 'project':
      return `${prefix}/${projectSegment[locale]}/${route.slug}/`;
  }
}

export { projectSegment };
