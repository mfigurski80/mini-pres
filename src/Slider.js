import React from 'react';
import "./css/slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesInfo: [
        {title: "ohii"},
        {title: "anhii"}
      ],
      curSlide: 0,
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideLeft(event) {
    event.preventDefault();
    this.setState({
      curSlide: this.state.curSlide - 1
    });
  }
  slideRight(event) {
    event.preventDefault();
    this.setState({
      curSlide: this.state.curSlide + 1
    });
  }

  render() {
    const slidesInfo = this.state.slidesInfo;
    const slidesElem = slidesInfo.map(slide =>
      <div className="slide" key={slide.title}>
        <h1>{slide.title}</h1>
      </div>
    );

    return(
      <div className="slot-plugin">
        <div className="slider-control">
          <div className="button-control" onClick={this.slideLeft}>
            <i className="fas fa-arrow-left" />
          </div>
          <div className="button-control" onClick={this.slideRight}>
            <i className="fas fa-arrow-right" />
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
