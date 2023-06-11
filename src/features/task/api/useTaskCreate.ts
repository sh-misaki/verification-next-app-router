import {
    trpc,
    type ReactQueryOptions,
    type RouterInputs,
    type RouterOutputs,
  } from '@/utils/trpc/hook';
   
  type PostCreateOptions = ReactQueryOptions['taskCreate'];
   
  function usePostCreate(options?: PostCreateOptions) {
    const utils = trpc.useContext();
   
    return trpc.taskCreate.useMutation({
      ...options,
      onSuccess(task) {
        // invalidate all queries on the task router
        // when a new task is created
        utils.tasks.invalidate();
        options?.onSuccess?.(task, task, null)
      },
    });
  }