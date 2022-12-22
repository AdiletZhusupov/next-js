import {useRouter} from 'next/router'
export default function Product() {
    
    const router = useRouter()
    const productId = router.query.productsId

    return (
      <h1>
        Details of Product Page {productId}
      </h1>
    );
  }