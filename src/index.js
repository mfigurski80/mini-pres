import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import Slider from './Slider.js';
import './css/index.css';
import './css/base.css';

class App extends React.Component {
  render() {
    return(
      <div className="layout-grid-main fullscreen">
        <div className="slot"></div>
        <div className="slot">
          <Slider />
        </div>
        <div className="slot">
          <Nav />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
