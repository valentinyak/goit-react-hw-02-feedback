import React, { Component } from 'react';
import shortid from 'shortid';

class Statistics extends Component {
  countTotalFeedback() {
    return Object.values(this.props.state).reduce((acc, value) => {
      return acc + value;
    });
  }

  countPositiveFeedbackPercentage() {
    return (this.props.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div>
        <h1>Statistics</h1>
        <ul>
          {this.props.stateKeys.map(key => (
            <li key={shortid.generate()}>
              {key.slice(0, 1).toUpperCase() +
                key.slice(1) +
                ': ' +
                this.props.state[key]}
            </li>
          ))}
          <li>Total: {this.countTotalFeedback()}</li>
          <li>
            Positive feedback:{' '}
            {Math.round(this.countPositiveFeedbackPercentage())}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
