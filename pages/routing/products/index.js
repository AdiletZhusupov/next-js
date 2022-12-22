import Link from "next/link";
export default function Products({productId = 100}) {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1><Link href="/products/1">Product Page 1</Link></h1>
      <h1><Link href="/products/2">Product Page 2</Link></h1>
      <h1><Link href="/products/3" replace>Product Page 3</Link></h1>
      <h1><Link href={`/products/${productId}`}>Product Page {productId}</Link></h1>
    </div>
  );
}
