import React from "react";
import PropTypes from "prop-types";

const Button = ({ loadingMore }) => {
  return (
    <div className="Button__box">
      <button className="Button" type="button" onClick={loadingMore}>
        Load More
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  loadingMore: PropTypes.func.isRequired,
};
