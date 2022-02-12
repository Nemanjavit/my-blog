import React, { useState } from "react";
import Input from "./Input";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import Comment from "./Comment";
import { FaRegComment } from "react-icons/fa";

function Post({ post }) {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const { title, postBody, timestamp } = post;

  const newCommentRef = doc(collection(db, `posts/${post.id}/comments`));
  const commentsRef = collection(db, `posts/${post.id}/comments`);
  const q = query(commentsRef, orderBy("timestamp", "asc"));

  const addComment = async (e) => {
    e.preventDefault();
    await setDoc(newCommentRef, {
      comment: newComment,
      uid: auth.currentUser.uid,
      timestamp: serverTimestamp(),
      author: auth.currentUser.displayName,
    });
    setNewComment("");
    setShowComments(true);
  };

  const deleteComment = async (id) => {
    console.log(id);
    await deleteDoc(doc(commentsRef, id));
  };

  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <article className="post">
      <div className="post__header">
        <h2 className="post__title">{title}</h2>
      </div>
      <div className="post__body">
        <p>{postBody}</p>
      </div>
      <div className="post__footer">
        <span className="post__date">
          Created at: {timestamp.toDate().toLocaleDateString("en-US", options)}
        </span>
        <div className="post__comments">
          {comments.length === 0 ? (
            <FaRegComment
              className="post__addComment"
              onClick={() => setShowComments(!showComments)}
            />
          ) : (
            <span
              onClick={() => setShowComments(!showComments)}
              className="post__numOfComments"
            >
              {comments.length} {comments.length === 1 ? "comment" : "comments"}
            </span>
          )}
        </div>
      </div>
      <section className="comments"></section>
      <ul
        className={`comments__list ${
          showComments ? "comments__list--show" : ""
        }`}
      >
        <form className="comments__form" onSubmit={addComment}>
          <Input
            style="comments__input"
            type="text"
            placeholder="Add your comment"
            name="newComment"
            value={newComment}
            changeHandler={(e) => setNewComment(e.target.value)}
          />
          {newComment ? (
            <button className="comments__button" type="submit">
              Post
            </button>
          ) : (
            ""
          )}
        </form>
        {comments
          ? comments.map((comment) => {
              return (
                <Comment
                  deleteComment={deleteComment}
                  key={comment.id}
                  comment={comment}
                />
              );
            })
          : ""}
      </ul>
    </article>
  );
}

export default Post;
