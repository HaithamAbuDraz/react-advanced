import type { Product } from '../types/Product';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{formatPrice(product.price)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
