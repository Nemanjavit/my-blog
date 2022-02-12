import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { GoDiffAdded } from "react-icons/go";
import ModalComponent from "../components/ModalComponent";
import {
  collection,
  setDoc,
  doc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function MyPosts() {
  const [showModal, setShowModal] = useState(false);
  const post = { title: "", postBody: "" };
  const newPostRef = doc(collection(db, "posts"));

  // adding post from modal form
  const getFormData = async (data) => {
    console.log(data);
    await setDoc(newPostRef, {
      title: data.title,
      postBody: data.postBody,
      uid: auth.currentUser.uid,
      timestamp: serverTimestamp(),
      author: auth.currentUser.displayName,
    });
  };

  // modal type prop is used to specify what type of modal will be in use
  // if add post is selected modal buttons and functions will be changed
  // add post or edit post
  return (
    <Container>
      <button onClick={() => setShowModal(true)} className="addPost__button">
        Create
        <GoDiffAdded className="addPost__icon" />
      </button>
      <Row>
        <h2>My posts</h2>
        <ModalComponent
          getFormData={getFormData}
          post={post}
          setShowModal={setShowModal}
          showModal={showModal}
          type="Add Post"
        />
      </Row>
    </Container>
  );
}

export default MyPosts;
