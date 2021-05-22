import React, { useState, useEffect, useRef } from "react";
import "./multi-slider.css";

const DualRangeSlider = () => {
  const [lowerVal, setLowerVal] = useState(null);
  const [upperVal, setUpperVal] = useState(null);
  const lowerValEl = useRef(null);
  const upperValEl = useRef(null);

  const newValue1 = Number(
    ((lowerVal - lowerValEl.current?.min) * 100) /
    (lowerValEl.current?.max - lowerValEl.current?.min)
  );
  const newPosition1 = 10 - newValue1 * 0.2;

  const newValue2 = Number(
    ((upperVal - upperValEl.current?.min) * 100) /
    (upperValEl.current?.max - upperValEl.current?.min)
  );
  const newPosition2 = 10 - newValue2 * 0.2;

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
    if (upperVal === lowerValEl.current?.max) {
      //Set the lower slider value to equal the upper value slider's maximum value minus one.
      setLowerVal(parseInt(lowerValEl.current?.max) - 1);
    }

  }

  return (
    <div class="multi-range-container">
      <div class="multi-range">
        {lowerVal && (
          <output
            style={{ left: `calc(${newValue1}% + (${newPosition1}px))` }}
            className="range-value"
          >
            <span>{lowerVal}</span>
          </output>
        )}
        <input
          ref={lowerValEl}
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
        {upperVal && (
          <output
            style={{ left: `calc(${newValue2}% + (${newPosition2}px))` }}
            className="range-value"
          >
            <span>{upperVal}</span>
          </output>
        )}
        <input
          ref={upperValEl}
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
