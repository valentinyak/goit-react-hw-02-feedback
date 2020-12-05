import React, { Component } from 'react';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const btnsArray = Object.keys(this.props.options);

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className={s.buttonList}>
          {btnsArray.map(name => (
            <li key={shortid.generate()}>
              <button
                type="button"
                className={s.statisticsBtn}
                onClick={() => {
                  this.props.onLeaveFeedback(name);
                }}
              >
                {name.slice(0, 1).toUpperCase() + name.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;
