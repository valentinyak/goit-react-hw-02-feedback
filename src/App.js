import React, { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getStateKeys() {
    return Object.keys(this.state);
  }

  onLeaveFeedback(name) {
    this.setState({ [name]: this.state[name] + 1 });
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    });
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return (this.state.good / this.countTotalFeedback()) * 100;
    }
  }

  render() {
    return (
      <div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback.bind(this)}
        />

        {Object.values(this.state).reduce((acc, value) => {
          return acc + value;
        }) === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default App;
