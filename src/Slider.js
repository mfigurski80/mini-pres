import React from 'react';
import "./css/slider.css";
import Slide from './Slide.js';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesInfo: [
        {title: "What is it?"},
        {title: "What's it for?"}
      ],
      curSlide: 0,
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  //slides left
  slideLeft(event) {
    event.preventDefault();
    if (this.state.curSlide > 0) {
      this.setState({
        curSlide: this.state.curSlide - 1
      });
    }
  }
  //slider right
  slideRight(event) {
    event.preventDefault();
    if (this.state.curSlide < this.state.slidesInfo.length - 1) {
      this.setState({
        curSlide: this.state.curSlide + 1
      });
    }
  }


  render() {
    const slidesInfo = this.state.slidesInfo;
    const slidesElem = this.state.slidesInfo.map((slide, pos) =>
      <Slide
        key={slide.title}
        info={slide}
        isCurrent={pos === this.state.curSlide}
      />
    );

    return(
      <div className="slot-plugin">
        <div className="slider-controls">
          <div className="slide-pos">
            <p>0{this.state.curSlide + 1}</p>
            <hr />
            <p>0{slidesInfo.length}</p>
          </div>

          <h1>Embrace the White Space</h1>

          <p>Take your UI to the next level</p>

          <div className="slider-control">
            <div className="button-control" onClick={this.slideLeft}>
              <i className="fas fa-arrow-left" />
            </div>
            <div className="button-control" onClick={this.slideRight}>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </div>
        <div className="slider-sheet" style={{
          width: slidesInfo.length + "00%",
          gridTemplateColumns: "repeat(" + slidesInfo.length + ", 1fr)",
          transform: "translateX(" + -100*this.state.curSlide/slidesInfo.length + "%)",
        }}>

          {slidesElem}
        </div>
      </div>
    );
  }
}

export default Slider;
