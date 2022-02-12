import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import {
  collection,
  setDoc,
  doc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { Container } from "react-bootstrap";
import Post from "../components/Post";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),

    []
  );

  const onSignOut = () => {
    signOut(auth).then(() => {
      console.log("signed out");
    });
  };

  return (
    <Container className="py-5">
      <ul>
        {posts
          ? posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })
          : ""}
      </ul>

      <button onClick={onSignOut}>Log out</button>
    </Container>
  );
}

export default HomePage;
