import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

class App extends Component {
  // Збереження
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Метод, котрий бере назву кнопки та прибавляє 1 в стейт
  onLeaveFeedback = event => {
    const label = event.target.textContent;

    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  // Метод, для сумування значення відгуків в стейт
  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );

    return total;
  };

  // Підраховує кількість відгуків (множимо на 100 та ділимо на загальну кількість)
  countPositiveFeedbackPercentage = () => {
    const percent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state} // Передаєм в компонент кнопок весь стейт
            onLeaveFeedback={this.onLeaveFeedback} // Метод для назви кнопок та інкремента
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback} // Передаєм в компонент статистики підрахунок всіх відгукв
            positivePercentage={this.countPositiveFeedbackPercentage} // Передаємо підрахунок гарних відгуків
          />
        </Section>
      </>
    );
  }
}

export default App;
