import React from 'react';
import './css/nav.css';
import SocialButtons from './SocialButtons.js';

class Nav extends React.Component {
  render() {
    return(
      <div className="slot-plugin">
        <nav className="navbar slot">
          <SocialButtons />
        </nav>
      </div>
    );
  }
}

export default Nav;
