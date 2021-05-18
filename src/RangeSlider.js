import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const RangeSlider = () => {
  const [value, setValue] = useState(50);
  const rangeEl = useRef(null);
  const bubbleEl = useRef(null);

  useEffect(() => {
    const newValue = Number(
      ((rangeEl.current?.value - rangeEl.current?.min) * 100) /
        (rangeEl.current?.max - rangeEl.current?.min)
    );
    const newPosition = 10 - newValue * 0.2;

    if (bubbleEl.current)
      bubbleEl.current.innerHTML = `<span>${rangeEl.current?.value}</span>`;
    if (bubbleEl.current)
      bubbleEl.current.style.left = `calc(${newValue}% + (${newPosition}px))`;
  }, [value]);

  return (
    <div className="range-wrap">
      {value && (
        <output ref={bubbleEl} id="bubble" className="range-value">
          <span></span>
        </output>
      )}
      <input
        ref={rangeEl}
        id="range"
        type="range"
        min="0"
        max="500"
        step="5"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default RangeSlider;
