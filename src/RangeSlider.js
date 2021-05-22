import React, { useState, useRef } from "react";
import "./App.css";

const RangeSlider = () => {
  const [value, setValue] = useState("");
  const rangeEl = useRef(null);

  const newValue = Number(
    ((value - rangeEl.current?.min) * 100) /
      (rangeEl.current?.max - rangeEl.current?.min)
  );
  const newPosition = 10 - newValue * 0.2;

  return (
    <div className="range-wrap">
      {value && (
        <output
          style={{ left: `calc(${newValue}% + (${newPosition}px))` }}
          className="range-value"
        >
          <span>{value}</span>
        </output>
      )}
      <input
        ref={rangeEl}
        type="range"
        step="5"
        min="0"
        max="500"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default RangeSlider;
