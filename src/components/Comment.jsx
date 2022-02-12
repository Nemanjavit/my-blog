import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase";

function Comment({ comment, deleteComment }) {
  const [userID, setuserID] = useState("");

  useEffect(() => {
    if (auth.currentUser !== null) {
      setuserID(auth.currentUser.uid);
    }
  }, []);
  return (
    <>
      <li className="comment">
        <span className="comment__author">{comment.author}</span>
        <p className="comment__text">{comment.comment}</p>
      </li>
      {userID == comment.uid ? (
        <button
          onClick={() => deleteComment(comment.id)}
          className="comment__delete"
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default Comment;
