import React, {Component} from 'react';
import LeftCol from './Data/LeftCol.json'
import RightCol from './Data/RightCol.json'

class PastProjects extends Component {
  render() {
    return (<section className="sect">
      <div className="sect__title_area">
        <img className="sect__icon" src="assets/img/i_mac_icon.png" alt=""/>
        <h2 className="sect__title">Past Projects</h2>
      </div>
      <div className="row sect__row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 sect__one_two">
          {
            LeftCol.map((k, i) => {
              return (<div>
                <ul key={i} className="">
                  <li className="sect__liexp_list">
                    <strong>{k.website}</strong><br/>
                    <span className="sect__link_exp">
                      <strong>
                        {k.url}</strong>
                    </span>
                  </li>
                </ul>
              </div>)
            })
          }
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 sect__one_two">
          {
            RightCol.map((k, i) => {
              return (<div>
                <ul key={i} className="">
                  <li className="sect__liexp_list">
                    <strong>{k.website}</strong><br/>
                    <span className="sect__link_exp">
                      <strong>
                        {k.url}</strong>
                    </span>
                  </li>
                </ul>
              </div>)
            })
          }
        </div>
      </div>
    </section>)
  }
}
export default PastProjects
