import React from 'react';

import styles from './Experience.module.css';

const Experience = ({data}) => {
  // { basics, education } = this.props;
  return (
    <div className="container">
    <h2>Experience</h2>
      {
        data.map( ( input ) => (
          <div>
            <div className={styles.designation}>{ input.designation }</div>
            <div className={styles.company}>{ input.company }</div>
            <span className={styles.year}>{input.year}</span>
          </div>
        ))
      }
    </div>
  );
}

export default Experience;
