import React, { Component } from 'react';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className={s.buttonList}>
          {this.props.stateKeys.map(key => (
            <li key={shortid.generate()}>
              <button
                type="button"
                className={s.statisticsBtn}
                onClick={() => {
                  this.props.onLeaveFeedback(key);
                }}
              >
                {key.slice(0, 1).toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
