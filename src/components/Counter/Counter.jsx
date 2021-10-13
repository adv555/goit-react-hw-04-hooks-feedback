import React, { Component } from 'react';
// import s from 'components/Counter/Counter.module.css';
import FeedbackOptions from 'components/Counter/FeedbackOptions';
import Statistics from 'components/Counter/Statistics';
import Section from 'components/Counter/Section';
import Notification from 'components/Counter/Notification';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  addFeedback = e => {
    const name = e.target.name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.floor((good * 100) / totalFeedback);
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            addFeedback={this.addFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              options={this.state}
              total={total}
              percentage={percentage}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default Counter;
