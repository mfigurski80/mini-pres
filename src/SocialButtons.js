import React from 'react';
import './css/social-buttons.css';

class SocialButtons extends React.Component {
  render() {
    return(
      <div className="slot-plugin social-buttons">
        <div className="nav-button"><i className="fab fa-facebook" /></div>
        <div className="nav-button"><i className="fab fa-linkedin" /></div>
        <div className="nav-button"><i className="fab fa-github" /></div>
      </div>
    );
  }
}

export default SocialButtons;
