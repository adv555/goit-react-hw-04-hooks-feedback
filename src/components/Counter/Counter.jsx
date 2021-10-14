import { useState } from 'react';
// import s from 'components/Counter/Counter.module.css';
import FeedbackOptions from 'components/Counter/FeedbackOptions';
import Statistics from 'components/Counter/Statistics';
import Section from 'components/Counter/Section';
import Notification from 'components/Counter/Notification';

function Counter() {
  const initialValue = 0;
  const [good, setGood] = useState(initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);

  const addFeedback = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        console.log(bad);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    // console.log(good, neutral, bad);
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const percentage = Math.floor((good * 100) / totalFeedback);
    return percentage;
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          addFeedback={addFeedback}
        />
      </Section>

      {total === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            // options={(good, neutral, bad)}
            total={total}
            percentage={percentage}
          />
        </Section>
      )}
    </div>
  );
}

export default Counter;
