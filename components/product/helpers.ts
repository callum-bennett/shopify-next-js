import { Product } from "@common/types/product";

type AvailableChoices = "color" | "size" | string;

export type Choices = {
  [P in AvailableChoices]: string;
};

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find((variant) =>
    variant.options.every((option) => {
      const name = option.displayName.toLocaleLowerCase();
      return name in choices && choices[name] === option.values[0].label;
    })
  );
