import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick, text, size }) => {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
};

export default Button;
