import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { z, ZodError } from "zod";
import { Context } from '@/app/api/trpc/[trpc]/context';

import { TaskItem } from "@/features/task/types";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
  errorFormatter: (opts) => {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
  transformer: superjson,
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.session?.user?.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
    });
  }
  return next({
    ctx: {
      // Infers the `session` as non-nullable
      session: ctx.session,
    },
  });
});

// Base router and procedure helpers
export const router = t.router;
export const middleware = t.middleware;

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

// Unprotected procedure
const publicProcedure = t.procedure;
 
// Protected procedure
const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = router({
  tasks: publicProcedure.query(() => {
    return {
      tasks,
    };
  }),
  taskCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .output(
      z.object({
        id: z.number(),
        name: z.string(),
      }),
    )
    .mutation(async (opts) => {
      // const { input } = opts;

      // // Create a new user in the database
      // const user = await db.user.create(input);

      // return user;
      return { id: 1, name: 'name' }
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
