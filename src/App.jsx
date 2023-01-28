import React, { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from 'components/Notification';

 export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // useEffect(() => {
  //   setTotal = good + neutral + bad;
  // },[good, neutral, bad])

  function total() {
    return (total = good + neutral + bad);
  }

  function positivePercentage() {
    return (positivePercentage = Math.round((good / total) * 100));
  }

  // Метод, котрий бере назву кнопки та прибавляє 1 в стейт
  function onClickBtn(event) {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }} // Передаєм в компонент кнопок весь стейт
          onLeaveFeedback={onClickBtn} // Метод для назви кнопок та інкремента
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
}


// На класах
// class App extends Component {
//   // Збереження
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // Метод, котрий бере назву кнопки та прибавляє 1 в стейтb
//   onLeaveFeedback = event => {
//     const label = event.target.textContent;

//     this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
//   };

//   // Метод, для сумування значення відгуків в стейт
//   countTotalFeedback = () => {
//     const total = Object.keys(this.state).reduce(
//       (acc, value) => acc + this.state[value],
//       0
//     );

//     return total;
//   };

//   // Підраховує кількість відгуків (множимо на 100 та ділимо на загальну кількість)
//   countPositiveFeedbackPercentage = () => {
//     const percent = Math.round(
//       (this.state.good * 100) / this.countTotalFeedback()
//     );

//     return percent;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state} // Передаєм в компонент кнопок весь стейт
//             onLeaveFeedback={this.onLeaveFeedback} // Метод для назви кнопок та інкремента
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback} // Передаєм в компонент статистики підрахунок всіх відгукв
//             positivePercentage={this.countPositiveFeedbackPercentage} // Передаємо підрахунок гарних відгуків
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
