import React, { useState, useEffect, useRef } from "react";
import "./multi-slider.css";

const DualRangeSlider = () => {
  const [lowerVal, setLowerVal] = useState(null);
  const [upperVal, setUpperVal] = useState(null);

  //If the upper value slider is LESS THAN the lower value slider plus one.
  if (upperVal < lowerVal + 1) {
    //The lower slider value is set to equal the upper value slider minus one.
    setLowerVal(upperVal - 1);
    //If the lower value slider equals its set minimum.
    if (lowerVal === 0) {
      //Set the upper slider value to equal 1.
      setUpperVal(1);
    }
  }
  //If the lower value slider is GREATER THAN the upper value slider minus one.
  if (lowerVal > upperVal - 1) {
    //The upper slider value is set to equal the lower value slider plus one.
    setUpperVal(lowerVal + 1);

    //If the upper value slider equals its set maximum.
    if (upperVal === 500) {
      //Set the lower slider value to equal the upper value slider's maximum value minus one.
      setLowerVal(parseInt(500) - 1);
    }

  }

  return (
    <div class="multi-range-container">
      <div class="multi-range">
        <input
          type="range"
          min="0"
          max="10"
          value={lowerVal}
          step="0.1"
          id="lower"
          onInput={e => setLowerVal(e.target.value)}
        />
        <span
          id="range-color"
          class="range-color"
          style={{ marginLeft: (lowerVal * 10) + '%', width: (upperVal * 10) - (lowerVal * 10) + '%' }}
        ></span>
        <input
          type="range"
          min="0"
          max="10"
          value={upperVal}
          step="0.1"
          id="upper"
          onInput={e => setUpperVal(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
