import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        className={styles[option]}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
