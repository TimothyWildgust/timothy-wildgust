import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function AllSkills(props) {
  return <div className="sect__skill">
    <div className="">
      <span>{props.skill}</span>
    </div>
  </div>
}

function SkillsTitle(props) {
  return <div className="row sect__hard">
    <div className="">
      <div className="sect__skill_type">
        <span>{props.title}</span>
      </div>
    </div>
  </div>
}

function YellowDotsFour() {
  return <div className="sect__yellow_contain">
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
  </div>
}
function YellowDotsFive() {
  return <div className="sect__yellow_contain">
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
    <div className="sect__yellow_dot"></div>
  </div>
}

class Skills extends Component {
  render() {
    const title = 'Skills'

    return (<section className="sect">
      <div className="sect__title_area">
        <img className="sect__icon" src="./img/skills_icon.png" alt=""/>
        <Title title={title}/>
      </div>

      <SkillsTitle title='HARD'/>

      <div className="row sect__row">
        <div className="col-6 col-md-3">

          <AllSkills skill='Wordpress'/>
          <AllSkills skill='CSS'/>
          <AllSkills skill='SASS | LESS'/>
          <AllSkills skill='JavaScript'/>
          <AllSkills skill='Design'/>
          <AllSkills skill='RWD'/>
          <AllSkills skill='GIT'/>
          <AllSkills skill='SEO'/>

        </div>
        <div className="col-6 col-md-3">
          <YellowDotsFive/>
          <YellowDotsFive/>
          <YellowDotsFour/>
          <YellowDotsFour/>
          <YellowDotsFour/>
          <YellowDotsFive/>
          <YellowDotsFive/>
          <YellowDotsFour/>
        </div>
        <div className="col-6 col-md-3">

          <AllSkills skill='Open Graph'/>
          <AllSkills skill='SVG Creation'/>
          <AllSkills skill='PDF Creation'/>
          <SkillsTitle title='Soft'/>
          <AllSkills skill='Creativity'/>
          <AllSkills skill='Hard Working'/>
          <AllSkills skill='Teamwork'/>
          <AllSkills skill='Flexibility'/>
        </div>
        <div className="col-6 col-md-3">

          <YellowDotsFive/>
          <YellowDotsFive/>
          <YellowDotsFive/>
          <div>
            <br/>
          </div>
          <YellowDotsFive/>
          <YellowDotsFive/>
          <YellowDotsFive/>
          <YellowDotsFive/>
        </div>
      </div>
    </section>)
  }
}

const Title = props => <h2 className='sect__title'>{props.title}</h2>
export default Skills
