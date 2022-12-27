export default function ProductList({ products }) {
  return (
    <>
      <h1>List of Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title} {product.price}</h2>
            <hr/>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch("http://localhost:4000/products");
  const data = await resp.json();
  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
