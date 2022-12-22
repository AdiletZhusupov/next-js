/* Tutorials 1-13 Routing
import Link from 'next/link'
import {useRouter} from 'next/router'
*/

//Tutorials 13-21

import Link from 'next/link'


export default function Home() {
  /* Tutorials 1-13 Routing
  const router = useRouter()
  const handleClick = () =>{
    router.push('/products')
  }
*/
  {
    /* Tutorials 1-13 Routing
return <h1>Home Page</h1>
<Link href="blog">Blog</Link>
<hr/>
<Link href="products">Product</Link>
<hr/>
<button onClick={handleClick}>Place Order</button> */
  }
  return (
    <div>
      <h1>Next js pre-rendering</h1>
      <Link href="/pre-rendering-data-fetching/users">Users Page</Link>
    </div>
  );
}
