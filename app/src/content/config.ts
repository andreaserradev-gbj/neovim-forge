// Content collection schema for course days
// You'll build this out on Day 3 when you learn operators + content collections
import { defineCollection, z } from "astro:content";

const days = defineCollection({
  type: "content",
  schema: z.object({
    day: z.number().min(0).max(30),
    title: z.string(),
    phase: z.number().min(1).max(5),
    summary: z.string(),
    vim_skills: z.array(z.string()),
    plugin_focus: z.string().nullable(),
    app_milestone: z.string(),
    estimated_time: z.string(),
    prerequisites: z.array(z.string()).default([]),
  }),
});

export const collections = { days };
