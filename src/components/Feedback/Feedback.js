import React from 'react';
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

export default FeedbackOptions;
