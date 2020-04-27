import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import styles from './App.module.css';
import Form from './components/Form/Form';
import Resume from './components/Resume/Resume';
class App extends React.Component {

  state = {
    basics: {
      name: '',
      email: '',
      address: '',
      phone: ''
    },
    education: [{ year: "", degree: "", institute: ""}],
    experience: [{ year: "", designation: "", company: ""}],
    skills:["","",""]
  }

  updateForm = ( name ) => e => {
    console.log( e.target.value )
    const { basics } = { ...this.state }
    const currentState = basics;
    currentState[name] = e.target.value
    this.setState( { basics: currentState });
  }
  updateEducation = ( educationValue,i ) => e => {
    this.state.education[ i ][educationValue] =  e.target.value
    this.setState( { education: this.state.education } );
  }

  updateExperience = ( experienceValue,i ) => e => {
    this.state.experience[ i ][experienceValue] =  e.target.value
    this.setState( { experience: this.state.experience } );
  }

  updateSkills = ( skillsValue,i ) => e => {
    this.state.skills[ i ] =  e.target.value
    this.setState( { skills: this.state.skills } );
  }

  addEducationRow = (e) => {
    this.setState((prevState) => ({
        education: [...prevState.education, { year: "", degree: "", institute:"" }],
    }));
  }
  addExperienceRow = (e) => {
    this.setState((prevState) => ({
        experience: [...prevState.experience, { year: "", designation: "", company:"" }],
    }));
  }

  addSkillsRow = (e) => {
    this.setState((prevState) => ({
        skills: [...prevState.skills, ""],
    }));
  }

  render () {
    return (
      <div>
        {/* {console.log(this.state)} */}
        {/* <p>{ this.state.basics.name }</p>
        <p>{ this.state.basics.email }</p>
        { console.log( this.state.basics ) } */}
        {/* { console.log( this.state.education[0]["course"] ) } */}
        {/* {this.state.education.length} */ }
        <Router history = {browserHistory}>
            <Route path = "/" component={ () => <Form updateForm={ this.updateForm } updateEducation={ this.updateEducation } updateExperience={ this.updateExperience } updateSkills={this.updateSkills} addEducationRow={ this.addEducationRow } addExperienceRow={ this.addExperienceRow } addSkillsRow={this.addSkillsRow} state={this.state} /> } />
            <Route path = "resume" component={ () => <Resume state={this.state} /> } />
      </Router>
      </div>
    );
  }
}

export default App;
