import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey">
          <Link to="/" className="brand-logo">
            Persian Lyrical
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/songs/new" >
                new Song
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
