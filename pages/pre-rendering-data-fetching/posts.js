import Post from "../../components/post";

export default function Posts({posts}) {
  return (
    <div>
      <h1>You can see pre-rendered Posts</h1>
      {posts.map(post => <Post key={post.id} post={post}/>)}
    </div>
  );
}


export async function getStaticProps(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await resp.json()
    return {
        props: {
            posts: data
        }
    }
}