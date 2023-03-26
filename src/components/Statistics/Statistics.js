import PropTypes from 'prop-types';
import {
  ListStatistics,
  ListElem,
  ContentSpan,
  PositiveFeedBack,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistics>
      <ListElem>
        <ContentSpan good={good}>Good:{good}</ContentSpan>
      </ListElem>
      <ListElem>
        <ContentSpan neutral={neutral}>Neutral:{neutral}</ContentSpan>
      </ListElem>
      <ListElem>
        <ContentSpan bad={bad}>Bad:{bad}</ContentSpan>
      </ListElem>
      <ListElem>
        <ContentSpan>Total:{total}</ContentSpan>
      </ListElem>
      <ListElem>
        <ContentSpan>PositiveFeedBack:</ContentSpan>
        {positivePercentage > 0.1 && (
          <PositiveFeedBack>{positivePercentage.toFixed(0)}%</PositiveFeedBack>
        )}
      </ListElem>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
