import { useEffect } from "react";

export async function getStaticProps() {
  const products = [1, 2, 3];

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  };
}

const Home = () => {
  return <div>Hello world</div>;
};

export default Home;
