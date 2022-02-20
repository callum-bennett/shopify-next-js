import useAddItem from "@common/cart/use-add-item";
import { MutationHook } from "@common/types/hooks";

export default useAddItem;

export const handler: MutationHook = {
  fetcher: (input) => {
    return JSON.stringify(input) + "_MODIFIED";
  },
  useHook: ({ fetch }) => {
    return (input: any) => {
      const response = fetch(input);
      return {
        output: response
      };
    };
  },
};
