import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: one Markdown file per post in src/content/blog/ (edited in Pages CMS → "Блог").
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().optional(),
    cover: z.string().optional(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Case studies: one JSON file per case in src/content/portfolio/ (edited in Pages CMS → "Кейси").
const pair = z.object({ value: z.string(), label: z.string() });
const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    draft: z.boolean().default(false),
    created: z.coerce.date(),
    tag: z.string().default(''),
    categories: z.array(z.string()).default([]),
    location: z.string().default(''),
    duration: z.string().default(''),
    services: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    highlights: z.array(pair).default([]),
    client_image: z.string().default(''),
    client_text: z.string().default(''),
    product_text: z.string().default(''),
    product_list_title: z.string().default(''),
    product_list: z.array(z.string()).default([]),
    product_text_2: z.string().default(''),
    goals: z.array(z.string()).default([]),
    challenges: z.array(z.string()).default([]),
    solution: z.string().default(''),
    results_text: z.string().default(''),
    results: z.array(pair).default([]),
    results_closing: z.string().default(''),
  }),
});

export const collections = { blog, portfolio };
