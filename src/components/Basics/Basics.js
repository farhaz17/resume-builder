import React from 'react';

import styles from './Basics.module.css';

const Basics = ({data}) => {
  // { basics, education } = this.props;
  return (
    <div className={styles.basics}>
      <div className="text-center">
        <h1>{ data.name }</h1>
        <div className="row">
          <div className="col-4">
          <span>{ data.phone }</span>
          </div>
          <div className="col-4">
          <span>{ data.email }</span>
          </div>
          <div className="col-4">
          <div>{data.address}</div>
          </div>
        </div>
      </div>
      {/* {console.log(basics)} */}
    <hr/>
    </div>
  );
}

export default Basics;
