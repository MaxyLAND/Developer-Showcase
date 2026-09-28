import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A string written once per language. */
const localized = z.object({ en: z.string(), es: z.string() });

/**
 * One YAML file per project in src/content/projects/.
 * Adding a game or a tool means adding one file here; the home page and
 * the project page pick it up automatically.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.yaml' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(['game', 'tool', 'web']),
      status: z.enum(['released', 'in-development', 'prototype']),
      /** Lower numbers show first. */
      order: z.number().default(100),
      tagline: localized,
      summary: localized,
      /** Paragraphs for the project page. */
      body: z.array(localized).default([]),
      released: z.coerce.date().optional(),
      platforms: z.array(z.string()).default([]),
      engine: z.string().optional(),
      price: z.string().optional(),
      facts: z.array(z.object({ label: localized, value: localized })).default([]),
      links: z
        .array(
          z.object({
            kind: z.enum(['steam', 'itch', 'github', 'web', 'download', 'youtube']),
            url: z.url(),
            label: localized.optional(),
          }),
        )
        .default([]),
      cover: image(),
      coverAlt: localized,
      logo: image().optional(),
      screenshots: z.array(z.object({ src: image(), alt: localized })).default([]),
      video: z
        .object({
          webm: z.string().optional(),
          mp4: z.string().optional(),
          poster: image(),
        })
        .optional(),
      trailer: z.object({ youtubeId: z.string(), title: z.string() }).optional(),
      credits: z.array(z.object({ role: localized, name: z.string() })).default([]),
      press: z
        .array(z.object({ outlet: z.string(), title: z.string(), url: z.url() }))
        .default([]),
    }),
});

export const collections = { projects };
