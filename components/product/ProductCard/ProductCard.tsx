import { FC } from "react";
import { Product } from "@common/types/product";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {

  return (
    <Link href={`/products/${product.slug}`}>
      <a className="">
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>£23</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? "Product image"}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
