import React, {Component} from 'react';
import './Nav.css';


class Nav extends Component{
  render(){
      return(
        <nav className="navbar navbar-light navbar-expand-md navigation-clean fixed-top" id="appear">
          <div className="container"><a className="navbar-brand" href="#"></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav text-center ml-auto">
                <li className="nav-item" role="presentation"><a className="nav-link" href="certificate.html">CERTIFICATE</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link active" href="index.html">HOME</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link" href="portfolio.html">PORTFOLIO</a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }
  export default Nav
