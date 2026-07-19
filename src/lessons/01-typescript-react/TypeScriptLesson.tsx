import ProductList from './components/ProductList';

function TypeScriptLesson() {
  const products = [
    {
      id: 1,
      title: 'Laptop',
      price: 1200,
    },
    {
      id: 2,
      title: 'Mouse',
      price: 40,
    },
  ];

  return (
    <div>
      <h1>TypeScript with React</h1>

      <ProductList products={products} />
    </div>
  );
}

export default TypeScriptLesson;
