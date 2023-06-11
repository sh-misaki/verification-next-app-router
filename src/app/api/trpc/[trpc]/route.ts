import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { appRouter } from "@/app/api/trpc/router";
import { Context } from '@/app/api/trpc/[trpc]/context';

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: function (
      opts: FetchCreateContextFnOptions
    ): Context | Promise<Context> {
      return { session: null };
    },
    onError: (opts) => {
      const { error } = opts;
      console.error('Error:', error);
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        // send to bug reporting
      }
    }
  });
};

export { handler as GET, handler as POST };
