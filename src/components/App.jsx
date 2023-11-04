import css from './StyleContainer.module.css';
import React, { Component } from 'react';
import {Section} from './Section/Section'
import { FeedbackOptions } from './FeedBackOptions/FeedbackOptions';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };


  render() {
    return (
      <div className ={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>
      </div>
      
    )
  }
}
