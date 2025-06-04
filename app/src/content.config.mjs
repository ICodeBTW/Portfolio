import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
   
  loader: file("/app/src/data/project.json", (data) => {
    console.log("this is data",data);
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    img: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
    startDate: z.string(),
    endDate: z.string().optional(),
    links: z.object({
      github: z.object({
        href: z.string().url().optional(),
        disabled: z.boolean().optional()
      }).optional(),
      live: z.object({
        href: z.string().url().optional(),
        disabled: z.boolean().optional()
      }).optional(),
      demo: z.object({
        href: z.string().url().optional(),
        disabled: z.boolean().optional()
      }).optional(),
    }).optional(),
    category: z.enum(['web', 'mobile', 'devops', 'ai', 'infrastructure', 'fullstack' ,'other']).default('web'),
  }),
 
});



export const collections = {
  projectsCollection,
};