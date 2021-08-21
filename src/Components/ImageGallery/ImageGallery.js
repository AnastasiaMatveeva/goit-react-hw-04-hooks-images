import React, { useState, useEffect, useRef } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import imagesApi from "../../Services/ImagesApi";
import Button from "../Button";
import Modal from "../Modal/Modal";
import Loader from "../Loader";
import PropTypes from "prop-types";

export default function ImageGallery({ searchValue, pageNum, setPageNum }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  function getData() {
    setLoading(true);
      imagesApi
        .fetchImagesWithQuery(searchValue, pageNum)
        .then((data) => {
          if (pageNum === 1) {
            setImages(data);
          } else {
            setImages((prevState) => [...prevState, ...data]);

            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
        })
        .catch((error) => setError(error))
        .finally(() => {
          setLoading(false);
          setPageNum((prevState) => prevState + 1);
        });
  }

  useEffect(() => {
    if (searchValue) {
      setImages([]);
      getData();
    }
  }, [searchValue]);

  const toggleModal = (event) => {
    let largeImg;

    if (!showModal) {
      largeImg = event.currentTarget.getAttribute("data-modal");
    }
    setShowModal(!showModal);
    setLargeImageURL(largeImg);
  };

  return (
    <>
      {!searchValue && <div>Enter ...</div>}
      {images.length > 0 && (
        <>
          <ul className="ImageGallery">
            {images.map(({ webformatURL, largeImageURL, id }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  onToggleModal={toggleModal}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                />
              );
            })}
          </ul>
          {!loading && <Button loadingMore={getData} />}
        </>
      )}
      {loading && <Loader />}
      {showModal && (
        <Modal onClose={toggleModal} largeImg={largeImageURL}></Modal>
      )}
    </>
  );
}
ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
