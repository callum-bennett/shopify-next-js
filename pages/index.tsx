import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export default Home;
