import React, {Component} from 'react';
import DescriptionData from './Data/Descriptions.json'

class Experience extends Component {
  render() {
    return (<section className="sect">
      <div className="sect__title_area">
        <img className="sect__icon" src="assets/img/BriefCase_icon.png" alt=""/>
        <h2 id='experience' className="sect__title">Experience
        </h2>
      </div>
      {
        DescriptionData.map((k, i) => {
          return (
          <div key={i}>
            <ul className="sect__list_title">
              <li>
                <strong>{k.workplace}</strong>{k.date}</li>
            </ul>
            <div className="sect__list_area">
              <p className="sect__list_subtitle">
                <strong>{k.title}</strong>
              </p>
              <ul className="">
                {k.description.map((a) =>{
                  return <li className="sect__li_description">{a}</li>
                }  )}
              </ul>
            </div>
          </div>
        )
        })
      }
    </section>)
  }
}
export default Experience
