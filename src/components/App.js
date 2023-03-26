import { Section } from './Section/Section';
import { useState } from 'react';
import { FeedBackOptions } from './FeedBackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import React from 'react';

import { SectionBox } from './AppSection.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodOptions = () => {
    setGood(prevValue => prevValue + 1);
  };

  const addNeutralOptions = () => {
    setNeutral(prevValue => prevValue + 1);
  };

  const addBadOptions = () => {
    setBad(prevValue => prevValue + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalPositive = (good / countTotalFeedback()) * 100;
    return +totalPositive;
  };

  return (
    <SectionBox>
      <Section title={'Please Leave FeedBack'}>
        <FeedBackOptions
          options={[good, neutral, bad]}
          good={addGoodOptions}
          neutral={addNeutralOptions}
          bad={addBadOptions}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </SectionBox>
  );
};
