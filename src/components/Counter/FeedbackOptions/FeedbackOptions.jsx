import PropTypes from 'prop-types';
import s from 'components/Counter/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return options.map(option => {
    return (
      <label key={option}>
        <input
          type="submit"
          className={s.cornerButton}
          name={option}
          value={option}
          onClick={onClick}
        />
      </label>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
