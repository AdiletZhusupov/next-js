/* Tutorials 1-13 Routing
import Link from 'next/link'
import {useRouter} from 'next/router'
*/

//Tutorials 14-40 Pre-rendering-Data-fetching
// import Link from 'next/link'

/* Tutorials 66-78  Authentication Section */

import { useSession, signIn } from "next-auth/react";
export default function Home() {
  /* Tutorials 1-13 Routing
  const router = useRouter()
  const handleClick = () =>{
    router.push('/products')
  }
  */

  /* Tutorials 1-13 Routing
   return (<h1>Home Page</h1>
   <Link href="blog">Blog</Link>
   <hr/>
   <Link href="products">Product</Link>
   <hr/>
   <button onClick={handleClick}>Place Order</button>
   ) 
  */

  /*Tutorials 14-40 Pre-rendering-Data-fetching
  return (
    <div>
      <h1>Next js pre-rendering</h1>
      <Link href="/pre-rendering-data-fetching/users">Users Page</Link>
      <hr/>
      <Link href="/pre-rendering-data-fetching/posts">Posts Page</Link>
    </div>
  );
  */

  /*Tutorials 49-54 Styling 
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );*/

  /* Tutorials 66-78  Authentication Section */
  const {data: session, status} = useSession()

  return (
    <div>
      <h2>Hello {session ? `${session.user.name}!` : "Dear Guest!"}</h2>
    </div>
  )
}
