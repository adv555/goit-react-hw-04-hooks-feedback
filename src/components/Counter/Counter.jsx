import { useReducer } from 'react';
// import s from 'components/Counter/Counter.module.css';
import FeedbackOptions from 'components/Counter/FeedbackOptions';
import Statistics from 'components/Counter/Statistics';
import Section from 'components/Counter/Section';
import Notification from 'components/Counter/Notification';

function Counter() {
  function countReducer(state, action) {
    switch (action.type) {
      case 'good':
        return { ...state, good: state.good + action.payload };
      case 'neutral':
        return { ...state, neutral: state.neutral + action.payload };
      case 'bad':
        return { ...state, bad: state.bad + action.payload };

      default:
        throw new Error(`Unsuported action ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(countReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    // console.log(good, neutral, bad);
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
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
          onClick={e => {
            dispatch({ type: `${e.target.name}`, payload: 1 });
          }}
        />
      </Section>

      {total === 0 ? (
        <Notification message={'No feedback given'} />
      ) : (
        <Section title={'Statistics'}>
          <Statistics
            // good={state.good}
            // neutral={state.neutral}
            // bad={state.bad}
            options={state}
            total={total}
            percentage={percentage}
          />
        </Section>
      )}
    </div>
  );
}

export default Counter;

// ========= useState
// const [good, setGood] = useState(initialValue);
// const [neutral, setNeutral] = useState(initialValue);
// const [bad, setBad] = useState(initialValue);

// const addFeedback = e => {
//   const name = e.target.name;

//   switch (name) {
//     case 'good':
//       setGood(prev => prev + 1);
//       break;
//     case 'neutral':
//       setNeutral(prev => prev + 1);
//       break;
//     case 'bad':
//       setBad(prev => prev + 1);
//       console.log(bad);
//       break;
//     default:
//       throw new Error(`Unsuported action ${name}`);
//   }
// };
