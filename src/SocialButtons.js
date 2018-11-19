import React from 'react';
import './css/social-buttons.css';

class SocialButtons extends React.Component {
  render() {
    return(
      <div className="slot-plugin social-buttons">
        <a href="https://www.facebook.com/meeks.figs" className="nav-button"><i className="fab fa-facebook" /></a>
        <a href="https://www.linkedin.com/in/mikolaj-figurski-1257a7149/" className="nav-button"><i className="fab fa-linkedin" /></a>
        <a href="https://github.com/mfigurski80" className="nav-button"><i className="fab fa-github" /></a>
      </div>
    );
  }
}

export default SocialButtons;
