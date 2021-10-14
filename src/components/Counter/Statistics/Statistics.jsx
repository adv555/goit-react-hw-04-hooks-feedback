import PropTypes from 'prop-types';

function Statistics({ total, percentage, options: { good, neutral, bad } }) {
  // console.log(total, percentage, good, neutral, bad);
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positiv Feedback: {percentage}</p>
    </div>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  // good: PropTypes.number.isRequired,
  // neutral: PropTypes.number.isRequired,
  // bad: PropTypes.number.isRequired,
};

export default Statistics;
