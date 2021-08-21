import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImageURL }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={onToggleModal}
      data-modal={largeImageURL}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
