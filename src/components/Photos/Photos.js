import React from "react";
import { api } from "./../../Api/api";
import Preloader from "./../Preloader/Preloader";
import ErrorMessage from "./../Error/Error";
import Modal from "./../Modal/Modal";
import "./Photos.css";

class Gallery extends React.Component {
  state = {
    photos: [],
    id: null,
    error: null,
    isLoaded: false,
    isModal: false
  };
  componentDidMount() {
    api.getPhotos().then(
      photos => {
        this.setState({ photos: photos, isLoaded: true });
      },
      error => {
        this.setState({ error: error, isLoaded: true });
      }
    );
  }

  handleClickOpen = (id, e) => {
    e.preventDefault();
    this.setState({ id: id, isModal: true });
  };

  handleClickClose = () => {
    this.setState({ id: null, isModal: false });
  };
  handleLinkClick = e => {
    e.preventDefault();
  };

  render() {
    const photosList = this.state.photos.map(it => {
      return (
        <li key={it.id} className="photos_items">
          <a
            href="#"
            onClick={e => this.handleClickOpen(it.id, e)}
            className="photos_link"
          >
            <img className="photos_img" src={it.url} alt="фото" />
          </a>
        </li>
      );
    });
    if (!this.state.isLoaded) {
      return <Preloader />;
    } else if (this.state.error) {
      return <ErrorMessage message={this.state.error.message} />;
    } else {
      return (
        <>
          <section className="photos">
            {<ul className="photos_list">{photosList}</ul>}
          </section>
          {this.state.isModal && (
            <Modal
              id={this.state.id}
              handleClickClose={this.handleClickClose}
            />
          )}
        </>
      );
    }
  }
}

export default Gallery;
