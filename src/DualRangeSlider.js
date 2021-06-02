import React, { useState, useRef } from "react";
import "./multi-slider.css";

const DualRangeSlider = ({ min, max }) => {
  const [lowerVal, setLowerVal] = useState("");
  const [upperVal, setUpperVal] = useState("");

  const newValue1 = Number(
    ((lowerVal - min) * 100) /
    (max - min)
  );
  const newPosition1 = 10 - newValue1 * 0.2;

  const newValue2 = Number(
    ((upperVal - min) * 100) /
    (max - min)
  );
  const newPosition2 = 10 - newValue2 * 0.2;


  //If the upper value slider is LESS THAN the lower value slider.
  if (upperVal > lowerVal) {
    //The lower slider value is set to equal the upper value slider.
    upperVal && setLowerVal(parseFloat(upperVal));
    //If the lower value slider equals its set minimum.
    if (lowerVal === 0) {
      //Set the upper slider value to equal 1.
      setUpperVal(1);
    }
  }
  //If the lower value slider is GREATER THAN the upper value slider minus one.
  if (lowerVal < upperVal - 1 && upperVal > 10) {
    //The upper slider value is set to equal the lower value slider plus one.
    lowerVal && setUpperVal(parseFloat(lowerVal) + 1);

    //If the upper value slider equals its set maximum.
    if (upperVal === max && lowerVal > 0) {
      //Set the lower slider value to equal the upper value slider's maximum value minus one.
      setLowerVal(parseFloat(max) - 1);
    }

  }


  return (
    <div className="multi-range-container">
      <div className="multi-range">
        {lowerVal && (
          <output
            style={{ left: `calc(${newValue1}% + (${newPosition1}px))` }}
            className="range-value"
          >
            <span>{lowerVal}</span>
          </output>
        )}
        <input
          type="range"
          min={min}
          max={max}
          value={lowerVal}
          step="0.1"
          id="lower"
          onInput={e => setLowerVal(parseFloat(e.target.value))}
        />
        <span
          id="range-color"
          className="range-color"
          style={{
            background: "#000000",
            // background: "-moz-linear-gradient(left,  #000000 25%, #ffffff 25%, #ffffff 86%, #000000 86%, #000000 86%)",
            background: `-webkit-linear-gradient(left,  #000000 ${(upperVal * 10 / max * 10) - min}%,#FF0000 ${(upperVal * 10 / max * 10) - min}%,#FF0000 ${(lowerVal * 10 / max * 10) - min}%,#000000 ${lowerVal * 10 / max * 10}%)`
            // background: "linear-gradient(to right,  #000000 25%,#ffffff 25%,#ffffff 86%,#000000 86%,#000000 86%)" 
          }}
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
          type="range"
          min={min}
          max={max}
          value={upperVal}
          step="0.1"
          id="upper"
          onInput={e => setUpperVal(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
