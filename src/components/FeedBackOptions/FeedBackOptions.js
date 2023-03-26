import PropTypes from 'prop-types';
import { BtnFeedBack, BoxBtn } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, good, neutral, bad }) => {
  return (
    <BoxBtn>
      <BtnFeedBack type="button" name={options[0]} onClick={good}>
        Good
      </BtnFeedBack>
      <BtnFeedBack type="button" name={options[1]} onClick={neutral}>
        Neutral
      </BtnFeedBack>
      <BtnFeedBack type="button" name={options[2]} onClick={bad}>
        Bad
      </BtnFeedBack>
    </BoxBtn>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
