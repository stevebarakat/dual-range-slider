import React, { useState, useEffect, useRef } from "react";
import "./multi-slider.css";

const DualRangeSlider = () => {
  const [lowerVal, setLowerVal] = useState("");
  const [upperVal, setUpperVal] = useState("");
  const [upperValX, setUpperValX] = useState(null);
  const [lowerValX, setLowerValX] = useState(null);
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
  if (upperVal > lowerVal + 1) {
    //The lower slider value is set to equal the upper value slider minus one.
    upperVal && setLowerVal(parseFloat(upperVal) - 1);
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
    if (upperVal === lowerValEl.current?.max && lowerVal > 0) {
      //Set the lower slider value to equal the upper value slider's maximum value minus one.
      setLowerVal(parseFloat(lowerValEl.current?.max) - 1);
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
          ref={lowerValEl}
          type="range"
          min={0}
          max={10}
          value={lowerVal}
          step="0.1"
          id="lower"
          onMouseMove={e => setLowerValX(e.clientX)}
          onInput={e => setLowerVal(parseFloat(e.target.value))}
        />
        <span
          id="range-color"
          className="range-color"
          style={{
            background: "#000000",
            // background: "-moz-linear-gradient(left,  #000000 25%, #ffffff 25%, #ffffff 86%, #000000 86%, #000000 86%)",
            background: `-webkit-linear-gradient(left,  #000000 ${upperValX - 10}px,#ffffff ${upperValX -10}px,#ffffff ${lowerValX - 20}px,#000000 ${lowerValX -20}px,#000000 86%)`
            // background: "linear-gradient(to right,  #000000 25%,#ffffff 25%,#ffffff 86%,#000000 86%,#000000 86%)" 
          }}
        ></span>
        {upperVal && (
          <output
            style={{ left: `calc(${newValue2}% + (${newPosition2}px))` }}
            className="range-value"
          >
            <span>up:{upperVal}</span>
          </output>
        )}
        <input
          ref={upperValEl}
          type="range"
          min={0}
          max={10}
          value={upperVal}
          step="0.1"
          id="upper"
          onMouseMove={e => setUpperValX(e.clientX - 10)}
          onInput={e => setUpperVal(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
