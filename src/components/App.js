import { Section } from './Section/Section';
import { Component } from 'react';
import { FeedBackOptions } from './FeedBackOptions/FeedBackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import React from 'react';

import { SectionBox } from './AppSection.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodOptions = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutralOptions = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBadOptions = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalPositive = (good / this.countTotalFeedback()) * 100;
    return +totalPositive;
  };

  render() {
    return (
      <SectionBox>
        <Section title={'Please Leave FeedBack'}>
          <FeedBackOptions
            options={[this.state]}
            good={this.addGoodOptions}
            neutral={this.addNeutralOptions}
            bad={this.addBadOptions}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </SectionBox>
    );
  }
}
