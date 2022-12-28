import React from 'react';
import PropTypes from 'prop-types';

import styles from '../stylesheets/PopulationGraph.module.css';

const PopulationGraph = ({ result, message }) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <h3>
        最終更新日:
        {new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }).slice(0, 10)}
      </h3>

      <div data-testid='line-chart' className={styles.lineChart} />
    </div>
  );
};

PopulationGraph.propTypes = {
  result: PropTypes.instanceOf(Array),
  message: PropTypes.string,
};

PopulationGraph.defaultProps = {
  result: [],
  message: '',
};

export default PopulationGraph;
