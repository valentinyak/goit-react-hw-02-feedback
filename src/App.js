import React, { Component } from 'react';

import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

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

  render() {
    const stateKeys = this.getStateKeys();

    return (
      <div>
        <FeedbackOptions
          state={this.state}
          stateKeys={stateKeys}
          onLeaveFeedback={this.onLeaveFeedback.bind(this)}
        />

        <Statistics state={this.state} stateKeys={stateKeys} />
      </div>
    );
  }
}

export default App;
