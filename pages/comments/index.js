import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const resp = await fetch("/api/comments");
    const data = await resp.json();
    setComments(data);
  };
  
  const submitComment = async () => {
    const resp = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({comment}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    console.log(data);
  };
  return (
    <>
        <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
        <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}
