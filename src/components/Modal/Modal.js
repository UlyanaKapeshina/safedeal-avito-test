import React, { useEffect, useState, useCallback } from "react";
import { api } from "./../../Api/api";
import Preloader from "./../Preloader/Preloader";
import ErrorMessage from "./../Error/Error";
import "./Modal.css";

function Modal(props) {
  const id = props.id;
  const [comments, setComments] = useState([]);
  const [photoURL, setPhotoURL] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const escFunction = useCallback(
    e => {
      if (e.keyCode === 27) {
        props.handleClickClose();
      }
    },
    [props]
  );
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    api.getPhotoData(id).then(
      data => {
        setPhotoURL(data.url);
        setComments(data.comments);
        setIsLoaded(true);
      },
      error => {
        setError(error);
        setIsLoaded(true);
      }
    );
    return () => document.removeEventListener("keydown", escFunction, false);
  }, [escFunction, id]);

  const onSubmit = e => {
    e.preventDefault();
    if (name.trim() === "" || comment.trim() === "") {
      setValidateMessage("Заполните все поля");
      return;
    }
    setValidateMessage("");
    api.setComment(id, { name: name, comment: comment }).then(
      () => {
        setComments([
          ...comments,
          { name: name, text: comment, date: new Date() }
        ]);
        setComment("");
        setName("");
      },
      error => {
        setError(error);
      }
    );
  };
  const onNameChange = e => {
    setName(e.currentTarget.value);
    setValidateMessage("");
  };
  const onCommentChange = e => {
    setComment(e.currentTarget.value);
    setValidateMessage("");
  };

  const commentsList = comments.map(it => (
    <li key={it.id} className="comments_item comment">
      <p className="comment_date">{new Date(it.date).toLocaleDateString()}</p>
      <p className="comment_text">{it.text}</p>
    </li>
  ));
  if (!isLoaded) {
    return <Preloader className="photos_modal" />;
  } else if (error) {
    return <ErrorMessage message={error.message} className="photos_modal" />;
  } else {
    return (
      <div>
        <div className="photos_modal modal">
          <div className="modal_wrapper">
            <img className="modal_image" src={photoURL} alt="фото" />
            <ul className=" modal_comments comments_list">{commentsList}</ul>
            <form className="modal_form" onSubmit={onSubmit}>
              <input
                className="modal_field"
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={name}
                onChange={onNameChange}
              />
              <input
                className="modal_field"
                type="text"
                name="comment"
                placeholder="Ваше комметарий"
                value={comment}
                onChange={onCommentChange}
              />
              {validateMessage && (
                <span className="modal_validate">{validateMessage}</span>
              )}
              <button className="modal_submit" type="submit">
                Оставить комментарий
              </button>
            </form>
            <button
              className="modal_close"
              onClick={props.handleClickClose}
            ></button>
          </div>
        </div>
        <div className="modal_shadow" onClick={props.handleClickClose}></div>
      </div>
    );
  }
}

export default Modal;
