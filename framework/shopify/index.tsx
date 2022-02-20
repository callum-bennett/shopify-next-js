import { ReactNode } from "react";
import { getConfig } from "./api/config";
import {
  ApiProvider as CommonApiProvider,
  useApiProvider as useCommonApiProvider,
} from "@common";
import { shopifyHooks } from "@framework/hooks";

const config = getConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CommonApiProvider config={config} hooks={shopifyHooks}>
      {children}
    </CommonApiProvider>
  );
};

export const useApiProvider = () => useCommonApiProvider();
