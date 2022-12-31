import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null)

  const fetchComments = async () => {
    const resp = await fetch("/api/comments");
    const data = await resp.json();
    setComments(data);
  };
  
  const submitComment = async () => {
    if(!editingCommentId){
      const resp = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({comment}),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      const data = await resp.json();
      console.log(data);
    }else if(editingCommentId){
      const resp = await fetch(`/api/comments/${editingCommentId}`, {
        method: "PUT",
        body: JSON.stringify({comment}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    setEditingCommentId(null)
    console.log(data);
    }
    setComment("")
  };

  
  const deleteComment = async(commentId) => {
    const resp = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE"
    })
    const data = await resp.json();
    console.log(data)
    fetchComments()
  }

  const editComment = (comment) => {
    setComment(comment.text)
    setEditingCommentId(comment.id)
  }

  return (
    <>
        <input type="text" value={comment} onChange={e => setComment(e.target.value)}/>
        <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={()=> deleteComment(comment.id)}>Delete</button>
            <button onClick={()=> editComment(comment)}>Edit</button>
          </div>
        );
      })}
    </>
  );
}
