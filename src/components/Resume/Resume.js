import React from 'react';
import {Link } from 'react-router'
import Basics from '../Basics/Basics'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'

import styles from './Resume.module.css';

const Resume = ({state}) => {
  // { basics, education } = this.props;
  return (
    <div className="container">
      <Basics data={state.basics} />
      <Skills data={state.skills} />
      <div className="row">
        <div className="col-6">
          <Education data={state.education} />
        </div>
        <div className="col-6">
          <Experience data={state.experience}/>
        </div>
      </div>
      <div className="text-center">
        <Link className="btn" to="/">Edit Resume</Link>
      </div>
    </div>
  );
}

export default Resume;
