import React, {Component} from 'react';
import './LeftPanel.css';

class LeftPanel extends Component{
  render(){
      return(
        <div>
            <section className="intro triangle">

              <h1 className="intro__title"><b>Timothy<br />Wildgust</b></h1>
              <img className="intro__avatar" src="./img/tim-avatar_opt1.png" alt="Timothy Wildgust" title="Timothy Wildgust Avatar" />
              <h2 className="intro__subtitle">Front-<br />End Developer</h2>
              <img className="intro__dots" src="./img/Position_dots1.png" alt="three dots" title="..." />
              <p className="intro__description">For the past two years I have been working in the IT industry, developing, designing and maintaining Wordpress websites. My programming &amp; web-development skills include HTML, CSS, RWD, WordPress and
                basics of PHP &amp; JavaScript. <br/>
              <br/>I also have interest in UX/UI and really appreciate well designed websites and apps.&nbsp;In addition, I have experience with SEO, OpenGraph, site optimisation, image optimisation, PDF creation/alteration,
                SVG creation and have many more skills.</p>
              <p className="intro__position">Front-End Developer <br/>& Digital Marketing Strategist</p>

            </section>

            <div className="triangle__contain">
              <div className="triangle__image"></div>
            </div>

            <section className="contact">

              <h2 className="contact__titile">contact</h2>
              <img className="contact__icon" src="./img/Location_icon1.png" alt="Map Pointer on a map icn" title="Location" />
              <p className="contact__text">8 Blackberry Rise, Portmarnock,<br />Co. Dublin, D13 K292</p>

              <img className="contact__icon" src="./img/Phone_icon1.png" alt="Mobile phone icon" title="Contact Information" />
              <p className="contact__text">085 815 2290<br />timwildgust2@gmail.com</p>

              <img className="contact__icon" src="./img/Mouse_icon1.png" alt="Desktop mouse icon" title="Portfolio"/>
              <p className="contact__text">www.linkedin.com/in/timothy-wildgust</p>
            </section>
        </div>

      )
    }
  }
  export default LeftPanel
