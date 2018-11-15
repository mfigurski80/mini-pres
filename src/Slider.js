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

        </div>
        <div className="slider-sheet" style={{width: slidesInfo.length + "00%", "grid-template-columns": "repeat(" + slidesInfo.length + ", 1fr)"}}>
          {slidesElem}
        </div>
      </div>
    );
  }
}

export default Slider;
