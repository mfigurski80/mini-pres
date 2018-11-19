import React from 'react';
import './css/slide.css';


class Slide extends React.Component {
  render() {
    return(
      <div className={"slide " + (this.props.isCurrent ? "" : "hidden")}>
        <div className="slide-grid-layout">
          <div className="slide-grid-col1">
          </div>
          <div className="slide-grid-col2 slot-plugin">
            {
            <div className="img-wrapper">
              <img src={"images/" + this.props.info.img} alt=""></img>
            </div>
            }
          </div>
          <div className="slide-grid-col3">
            <div>
              <h2>{this.props.info.title}</h2>
              <p></p>
              <p>{this.props.info.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
