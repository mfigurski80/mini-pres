import React from 'react';
import "./css/slider.css";
import Slide from './Slide.js';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesInfo: [
        {title: "Embrace the White Space", sub: "White space provides ease for eyes. You should use it more."},
        {title: "Never Enough"},
        {title: "Designs frequently lack Nothing"},
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
        controls={{"left": this.slideLeft, "right": this.slideRight}}
        nth={pos+1}
        outOf={slidesInfo.length}
        isCurrent={pos == this.state.curSlide}
      />
    );

    return(
      <div className="slider-sheet" style={{
        width: slidesInfo.length + "00%",
        gridTemplateColumns: "repeat(" + slidesInfo.length + ", 1fr)",
        transform: "translateX(" + -100*this.state.curSlide/slidesInfo.length + "%)",
      }}>
        {slidesElem}
      </div>
    );
  }
}

export default Slider;
