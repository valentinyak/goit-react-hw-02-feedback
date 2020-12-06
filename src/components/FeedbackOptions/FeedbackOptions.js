import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul className={s.buttonList}>
          {options.map(name => (
            <li key={shortid.generate()}>
              <button
                type="button"
                className={s.statisticsBtn}
                onClick={() => {
                  onLeaveFeedback(name);
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
