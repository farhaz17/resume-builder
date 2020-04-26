import React from 'react';

import styles from './Education.module.css';

const Education = ({data}) => {
  // { basics, education } = this.props;
  return (
    <div className="container">
      <h2>Education</h2>
      {
        data.map( ( input ) => (
          <div>
            <div className={styles.degree}>{ input.degree }</div>
            <div className={styles.institute}>{ input.institute }</div>
            <span className={styles.year}>{input.year}</span>
          </div>
        ))
      }
    </div>
  );
}

export default Education;
