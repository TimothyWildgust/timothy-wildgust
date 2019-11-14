import React, {Component} from 'react';
import './MainContent.css';
import Experience from './Experience/Experience'
import PastProjects from './PastProjects/PastProjects'
import Skills from './Skills/Skills'
import Education from './Education/Education';
import Hobbies from './Hobbies/Hobbies';

class MainContent extends Component{
  render(){
      return(
        <div>
          <Experience />
          <PastProjects />
          <Skills/>
          <Education/>
          <Hobbies/>
        </div>
      )
    }
  }
  export default MainContent
