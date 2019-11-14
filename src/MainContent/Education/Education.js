import React, {Component} from 'react';


class Education extends Component{
  render(){
      return(
        <section className="sect">
          <div className="sect__title_area">
            <img className="sect__icon" src="assets/img/Education_icon.png" alt="" />
            <h2 className="sect__title">Education </h2>
          </div>
          <ul className="sect__list_title">
            <li><strong>National College of Ireland ( NCIRL )</strong></li>
          </ul>
          <div className="sect__description">
            <p className="">BSc Honours in Computing</p>
            <p className="">2013 – 2018</p>
            <p className="">The course is industry-focused with a six month work placement in the third year. NCI students are highly sought after and complete their work experience in companies like Microsoft, O2, ESB, Wells Fargo,
              Dotmobi, Datalex and Intel.
              <br />
              Activities : NetSoc (Computer Networking Society), IBM Ethical Hacking 2nd place</p>
          </div>
        </section>
      )
    }
  }
  export default Education
