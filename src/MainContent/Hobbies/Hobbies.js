import React, {Component} from 'react';


class Hobbies extends Component{
  render(){
      return(
        <section className="sect">
          <div className="sect__title_area">
            <img className="sect__icon" src="assets/img/Hobbies_icon.png" alt="" />
            <h2 className="sect__title">Hobbies</h2>
          </div>
          <div className="row sect__row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 sect__one_four">
              <ul>
                <li className="sect__liexp_list_dark"><strong>Rock Climbing</strong></li>
                <li className="sect__liexp_list_dark"><strong>Scuba Diving</strong></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 sect__two_four">
              <ul>
                <li className="sect__liexp_list_dark"><strong>Design</strong></li>
                <li className="sect__liexp_list_dark"><strong>Cooking</strong></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 sect__three_four">
              <ul>
                <li className="sect__liexp_list_dark"><strong>Art</strong></li>
                <li className="sect__liexp_list_dark"><strong>Hiking</strong></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-3 sect__four_four">
              <ul>
                <li className="sect__liexp_list_dark"><strong>Science</strong></li>
                <li className="sect__liexp_list_dark"><strong>Jogging</strong></li>
              </ul>
            </div>
          </div>
        </section>
      )
    }
  }
  export default Hobbies
