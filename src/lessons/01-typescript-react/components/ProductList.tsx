import type { Product } from "../types/Product";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>

          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
