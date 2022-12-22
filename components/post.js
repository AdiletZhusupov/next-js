export default function Post({ post }) {
    return (
      <>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </>
    );
  }