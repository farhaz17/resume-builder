import React from 'react';

import styles from './Skills.module.css';

const Skills = ({data}) => {
  // { basics, education } = this.props;
  return (
    <div className="container">
      <h2>Skills</h2>
      {
        data.map( ( input ) => (
          <span className={styles.skills}>{ input }</span>
        ))
      }
    <hr/>
    </div>
  );
}

export default Skills;
