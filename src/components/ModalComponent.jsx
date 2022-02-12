import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Input from "./Input";

function ModalComponent({ showModal, setShowModal, post, type, getFormData }) {
  const [postData, setPostData] = useState(post);
  const handleClose = () => setShowModal(false);

  const formSubmit = (e) => {
    e.preventDefault();
    getFormData(postData);
  };

  return (
    <div>
      <>
        <Modal
          className="formModal"
          show={showModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="formModal__form"
              id="modalForm"
              onSubmit={formSubmit}
            >
              <Input
                label="Post title"
                value={postData.title}
                changeHandler={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
              <textarea
                name="postBody"
                className="formModal__textarea"
                placeholder="write your post..."
                id=""
                value={postData.postBody}
                onChange={(e) =>
                  setPostData({ ...postData, postBody: e.target.value })
                }
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="formModal__button " onClick={handleClose}>
              Close
            </button>
            <button
              className="formModal__button "
              type="submit"
              form="modalForm"
            >
              {type}
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ModalComponent;
