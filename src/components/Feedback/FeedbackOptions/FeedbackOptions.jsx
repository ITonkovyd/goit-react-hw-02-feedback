import PropTypes from 'prop-types';
import {
  FeedbackButton,
  FeedbackElement,
  FeedbackList,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedbackClick }) => (
  <FeedbackList>
    {options.map((option, index) => (
      <FeedbackElement key={index}>
        <FeedbackButton type="button" onClick={onFeedbackClick(option)}>
          {option[0].toUpperCase() + option.slice(1)}
        </FeedbackButton>
      </FeedbackElement>
    ))}
  </FeedbackList>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedbackClick: PropTypes.func.isRequired,
};
