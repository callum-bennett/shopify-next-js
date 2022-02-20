import useAddItem from "@common/cart/use-add-item";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: async ({ fetch }) =>
    await fetch({
      query: `query { hello }`,
    }),
  useHook: ({ fetch }) => {
    return async (input: any) => {
      const response = await fetch(input);
      return {
        output: response,
      };
    };
  },
};
