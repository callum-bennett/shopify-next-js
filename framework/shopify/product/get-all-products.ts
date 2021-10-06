import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // normalize and return new data

  const products =
    data.products.edges.map(({ node: product }) => product) ?? [];

  return products;
};

export default getAllProducts;
