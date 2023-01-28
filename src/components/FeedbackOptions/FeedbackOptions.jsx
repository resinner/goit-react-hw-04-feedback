import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.scss';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
   const optionsList = Object.keys(options);
  return (
    <ul className={styles.list}>
      {optionsList.map(item => (
          <li className={styles.item} key={item}>
            <button
              className={styles.button}
              type="button"
              name={item}
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// На класах
// import PropTypes from 'prop-types';

// import styles from './FeedbackOptions.module.scss';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <ul className={styles.list}>
//       {Object.keys(options).map(btnName => {
//         return (
//           <li className={styles.item} key={btnName}>
//             <button
//               className={styles.button}
//               type="button"
//               onClick={onLeaveFeedback}
//             >
//               {btnName}
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.object.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;
