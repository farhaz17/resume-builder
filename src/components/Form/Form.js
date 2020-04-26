import React, { useState } from 'react';
import {Link } from 'react-router'

import styles from './Form.module.css';

const Form = ({updateForm,updateEducation,updateExperience,update,updateSkills,addEducationRow,addExperienceRow,addSkillsRow,state}) => {
  // const [ education, setEducation ] = useState( [ 0 ] );
  // const [experience, setExperience] = useState([0]);

  const handleSubmit = event => {
    event.preventDefault();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h2>Basic Info</h2>
        <div className="form-group row">
          <div className="col-6">
            <label>Enter your name</label>
            <input
              type="text" className="form-control" value={state.basics.name} onChange = {updateForm('name')}
            />
          </div>
          <div className="col-6">
            <label>Email</label>
            <input
              type="text" className="form-control"value={state.basics.email}  onChange = {updateForm('email')}
            />
          </div>
          <div className="col-6">
          <label>Address</label>
          <input
            type="text" className="form-control" value={state.basics.address} onChange = {updateForm('address')}
          />
          </div>
          <div className="col-6">
            <label>Phone</label>
            <input
              type="number" className="form-control" value={state.basics.phone} onChange = {updateForm('phone')}
            />
          </div>
        </div>
        </div>
        <div className="container">
        <h2>Education</h2>
        {
          state.education.map( ( val, input ) => (
              <div className="form-group row">
              <div className="col-4">
                <label>Year</label>
                <input
                  type="text" className="form-control" value={val.year} onChange = {(updateEducation('year',input))}
                />
              </div>
              <div className="col-4">
              <label>Degree</label>
              <input
                type="text" className="form-control" value={val.degree} onChange = {(updateEducation('degree',input))}
                />
              </div>
              <div className="col-4">
              <label>Institute</label>
              <input
                type="text" className="form-control" value={val.institute} onChange = {(updateEducation('institute',input))}
                />
              </div>
              </div>
          ) )
          }
          <button className="btn btn-primary mt-2" onClick={ () => {  addEducationRow(); }}>Add Education</button>
        </div>

        <div className="container mt-3">
        <h2>Experience</h2>
        {
          state.experience.map( ( val, input ) => (
              <div className="form-group row">
              <div className="col-4">
                <label>Year</label>
                <input
                  type="text" className="form-control" value={val.year} onChange = {(updateExperience('year',input))}
                />
              </div>
              <div className="col-4">
              <label>Designation</label>
              <input
                type="text" className="form-control" value={val.designation} onChange = {(updateExperience('designation',input))}
                />
              </div>
              <div className="col-4">
              <label>Company</label>
              <input
                type="text" className="form-control" value={val.company} onChange = {(updateExperience('company',input))}
                />
              </div>
              </div>
          ) )
          }
          <button className="btn btn-primary mt-2" onClick={ () => { addExperienceRow(); }}>Add Experience</button>
          </div>

          <div className="container mt-3">
        <h2>Skills</h2>
        {
          state.skills.map( ( val, input ) => (
              <div className="form-group row">
              <div className="col-4">
                <input
                  type="text" className="form-control" value={val} onChange = {(updateSkills('skills',input))}
                />
              </div>
              </div>
          ) )
          }
          <button className="btn btn-primary mt-2" onClick={ () => { addSkillsRow(); }}>Add Skills</button>
          </div>

      </form>
      <div className="text-center">
        <Link className="btn" to="/resume">Preview</Link>
      </div>
      {/* {education[1]} */ }
      {console.log(state)}
    </div>
  );
}

export default Form;
