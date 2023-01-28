import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(options).map(btnName => {
        return (
          <li className={styles.item} key={btnName}>
            <button
              className={styles.button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
