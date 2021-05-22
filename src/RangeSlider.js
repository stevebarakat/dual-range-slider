import React, { useState, useRef } from "react";
import "./range-slider.css";

const RangeSlider = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const input1 = useRef(null);
  const input2 = useRef(null);

  const newValue1 = Number(
    ((value1 - input1.current?.min) * 100) /
    (input1.current?.max - input1.current?.min)
  );
  const newPosition1 = 10 - newValue1 * 0.2;

  const newValue2 = Number(
    ((value2 - input1.current?.min) * 100) /
    (input1.current?.max - input1.current?.min)
  );
  const newPosition2 = 10 - newValue2 * 0.2;

  return (
    <div>
      <div className="range-wrap">
        {value1 && (
          <output
            style={{ left: `calc(${newValue1}% + (${newPosition1}px))` }}
            className="range-value"
          >
            <span>{value1}</span>
          </output>
        )}
        <input
          id="input1"
          ref={input1}
          type="range"
          step="5"
          min="0"
          max="500"
          value={value1}
          onInput={(e) => setValue1(e.target.value)}
        />
        <div
          className="progress1"
          style={{
            // width: "100%",
            left: `calc(${newValue2}% + (${newPosition2}px))`
            // right: value2 * 2 / 10 + "%",
          }}
        ></div>
      </div>

      <div className="range-wrap">
        {value2 && (
          <output
            style={{ left: `calc(${newValue2}% + (${newPosition2}px))` }}
            className="range-value"
          >
            <span>{value2}</span>
          </output>
        )}
        <input
          id="input2"
          ref={input2}
          type="range"
          step="5"
          min="0"
          max="500"
          value={value2}
          onInput={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
