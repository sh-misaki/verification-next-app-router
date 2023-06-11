import { initTRPC } from "@trpc/server";
import superjson from "superjson";

import { TaskItem } from "@/features/task/types";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  transformer: superjson,
});

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;

const tasks: TaskItem[] = [
  {
    id: 1,
    title: "Leslie Alexander",
    description: "leslie.alexander@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 2,
    title: "Michael Foster",
    description: "michael.foster@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 3,
    title: "Dries Vincent",
    description: "dries.vincent@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 4,
    title: "Lindsay Walton",
    description: "lindsay.walton@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 5,
    title: "Courtney Henry",
    description: "courtney.henry@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
  {
    id: 6,
    title: "Tom Cook",
    description: "tom.cook@example.com",
    date: "2023-01-23T13:23Z",
    tags: ["category1", "category2"],
  },
];

export const appRouter = router({
  tasks: procedure
    .query(() => {
      return {
        tasks,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
