import React from 'react';
import './css/slide.css';


class Slide extends React.Component {
  render() {
    return(
      <div className={"slide container " + (this.props.isCurrent ? "" : "hidden")}>
        <div className="slide-grid-layout">
          <div className="slide-grid-col1">
          </div>
          <div className="slide-grid-col2">

          </div>
          <div className="slide-grid-col3">
            <p>HELLOOO</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
