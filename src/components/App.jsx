import css from './StyleContainer.module.css';
import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedBackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistcs';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  newFeedback = event => {
    if (event === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (event === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.newFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
