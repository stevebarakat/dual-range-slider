import React, { useState, useEffect, useRef } from "react";
import "./reset.css";
// import "./App.css";
import "./multi-slider.css";

const MultiSlider = () => {
  const [values, setValues] = useState({
    value2: 20,
    value1: 80
  });
  const input1 = useRef(null);
  const input2 = useRef(null);

  const newValue1 = Number(
    ((values.value1 - input1.current?.min) * 100) /
    (input1.current?.max - input1.current?.min)
  );

  const newValue2 = Number(
    ((values.value2 - input2.current?.min) * 100) /
    (input2.current?.max - input2.current?.min)
  );

  const newPosition1 = 10 - newValue1 * 0.2;
  const newPosition2 = 10 - newValue2 * 0.2;

  // if (input1.current)
  //   input1.current.innerHTML = `<span>${input1.current.value}</span>`;

  // if (input1.current)
  //   input1.current.style.left = `calc(${newValue1}% + (${newPosition1}px))`;

  // if (input2.current)
  //   input2.current.innerHTML = `<span>${input2.current.value}</span>`;

  // if (input2.current)
  //   input2.current.style.left = `calc(${newValue2}% + (${newPosition2}px))`;

  //If the upper value slider is LESS THAN the value1 value slider plus one.
  if (values.value2 < values.value1 + 1) {
    //The value1 slider value is set to equal the upper value slider minus one.
    setValues({ ...values, value1: parseInt(values.value2 - 1, 10) });
    //If the value1 value slider equals its set minimum.
    if (values.value1 === input1.min) {
      //Set the upper slider value to equal 1.
      setValues({ ...values, value2: parseInt(1, 10) });
    }
  }

  return (
    <div className="multi-range-container">
      <div className="multi-range">
        <span><output>{values.value1}</output></span>
        <input
          // ref={input1}
          type="range"
          min="0"
          max="500"
          step="5"
          value={values.value1}
          onInput={e => setValues({ ...values, value1: parseInt(e.target.value) })}
          style={{
            position: "relative",
            top: "1rem",
            left: `calc(${newValue1}% + (${newPosition1}px))`
          }}
        />
        {/* <span
          className="range-color"
          style={{ width: (values.value2 * 10) - (values.value1 * 10) + '%' }}
        ></span> */}
        <input
          // ref={input2}
          type="range"
          min="0"
          max="500"
          step="5"
          value={values.value2}
          onInput={e => setValues({ ...values, value2: parseInt(e.target.value) })}
          style={{ left: `calc(${newValue2}% + (${newPosition2}px))` }}
        />
      </div>
      <span><output>{values.value2}</output></span>
    </div>
  );
};

export default MultiSlider;
