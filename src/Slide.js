import React from 'react';
import './css/slide.css';


class Slide extends React.Component {
  render() {
    return(
      <div className={"slide container " + (this.props.isCurrent ? "" : "hidden")}>
        <div className="slide-grid-layout">
          <div className="slide-grid-col1">

            <div className="slide-pos">
              <p>0{this.props.nth}</p>
              <hr />
              <p>0{this.props.outOf}</p>
            </div>

            <h1>{this.props.info.title}</h1>

            <p>{this.props.info.sub}</p>

            <div className="slider-control">
              <div className="button-control" onClick={this.props.controls.left}>
                <i className="fas fa-arrow-left" />
              </div>
              <div className="button-control" onClick={this.props.controls.right}>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="slide-grid-col2">

          </div>
          <div className="slide-grid-col3">

          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
