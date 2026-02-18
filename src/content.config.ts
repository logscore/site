import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const dateSchema = z.coerce.date().transform((date) => {
  const d = new Date(date);
  return new Date(d.getTime() + d.getTimezoneOffset() * 60000);
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: dateSchema,
    updatedDate: dateSchema.optional(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
