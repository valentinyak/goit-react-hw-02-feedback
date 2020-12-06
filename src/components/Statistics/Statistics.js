import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const btnsArray = Object.keys(this.props).slice(0, 3);

    return (
      <div>
        <h1>Statistics</h1>
        <ul>
          {btnsArray.map(name => (
            <li key={shortid.generate()}>
              {name.slice(0, 1).toUpperCase() +
                name.slice(1) +
                ': ' +
                this.props[name]}
            </li>
          ))}
          <li>Total: {this.props.total}</li>
          <li>
            Positive feedback: {Math.round(this.props.positivePercentage)}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
