import {useRouter} from 'next/router'
export default function ReviewPage() {
    
    const router = useRouter()
    const productId = router.query.productsId
    const reviewId = router.query.reviewId
    return (
      <h1>
        Product Page {productId}, Review Page {reviewId}
      </h1>
    );
  }