import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./styles.css";

const DualRangeSlider = () => {
  const [value, setValue] = useState({
    upperValue: 20,
    lowerValue: 80
  });
  const lowerSlider = useRef(null);
  const upperSlider = useRef(null);
  const rangeColor = useRef(null);
  const lowerBubbleEl = useRef(null);
  const upperBubbleEl = useRef(null);
  //When the upper value slider is moved.
  console.log(value);
  upperSlider.current = () => {

    //If the upper value slider is LESS THAN the lower value slider plus one.
    if (value.upperValue < value.lowerValue + 1) {
      //The lower slider value is set to equal the upper value slider minus one.
      setValue({ ...value, lowerValue: parseInt(value.upperValue - 1, 10) });
      //If the lower value slider equals its set minimum.
      if (value.lowerValue === lowerSlider.min) {
        //Set the upper slider value to equal 1.
        setValue({ ...value, upperValue : parseInt(1, 10)});
      }
    }

    //Setting the margin left of the middle range color.
    //Taking the value of the lower value times 10 and then turning it into a percentage.
    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';

    //Setting the width of the middle range color.
    //Taking the value of the upper value times 10 and subtracting the lower value times 10 and then turning it into a percentage.
    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';

    console.log('upper value: ' + upperSlider.value);

    //If the lower value slider is GREATER THAN the upper value slider minus one.
    if (value.lowerValue > value.upperValue - 1) {
      //The upper slider value is set to equal the lower value slider plus one.
      upperSlider.value = value.lowerValue + 1;

      //If the upper value slider equals its set maximum.
      if (value.upperValue == upperSlider.max) {
        //Set the lower slider value to equal the upper value slider's maximum value minus one.
        lowerSlider.value = parseInt(upperSlider.max) - 1;
      }

    }

    //Setting the margin left of the middle range color.
    //Taking the value of the lower value times 10 and then turning it into a percentage.
    rangeColor.style.marginLeft = (lowerSlider.value * 10) + '%';

    //Setting the width of the middle range color.
    //Taking the value of the upper value times 10 and subtracting the lower value times 10 and then turning it into a percentage.
    rangeColor.style.width = (upperSlider.value * 10) - (lowerSlider.value * 10) + '%';

    console.log('lower value: ' + lowerSlider.value);
  };

  useEffect(() => {
    const newLowerSliderValue = Number(
      ((lowerSlider.current?.value - lowerSlider.current?.min) * 100) /
      (lowerSlider.current?.max - lowerSlider.current?.min)
    );
    const newLowerSliderPosition = 10 - newLowerSliderValue * 0.2;

    const newUpperSliderValue = Number(
      ((upperSlider.current?.value - upperSlider.current?.min) * 100) /
      (upperSlider.current?.max - upperSlider.current?.min)
    );
    const newUpperSliderPosition = 10 - newUpperSliderValue * 0.2;

    // if (lowerBubbleEl.current)
      lowerBubbleEl.current.innerHTML = `<span>${lowerSlider.current.value}</span>`;
    // if (lowerBubbleEl.current)
      lowerBubbleEl.current.style.left = `calc(${newLowerSliderValue}% + (${newLowerSliderPosition}px))`;

    // if (upperBubbleEl.current)
      upperBubbleEl.current.innerHTML = `<span>${upperSlider.current.value}</span>`;
    // if (upperBubbleEl.current)
      upperBubbleEl.current.style.left = `calc(${newUpperSliderValue}% + (${newUpperSliderPosition}px))`;
  }, [value]);

  return (
    <div className="range-wrap">
      <div className="multi-range-container">
        <div className="multi-range">
          <output ref={lowerBubbleEl} className="range-value">
            <span></span>
          </output>
          <input
            ref={lowerSlider}
            className="range"
            type="range"
            min="0"
            max="100"
            value={value.lowerValue}
            step="0.1"
            onInput={e => setValue({ ...value, lowerValue: parseInt(e.target.value) })}
          />
          <span class="range-color"></span>
          <input
            ref={upperSlider}
            className="range"
            type="range"
            min="0"
            max="100"
            value={value.upperValue}
            step="0.1"
            onInput={e => setValue({ ...value, upperValue: parseInt(e.target.value) })}
          />
          <output ref={upperBubbleEl} className="range-value">
            <span></span>
          </output>
        </div>
      </div>
    </div>
  );
};

export default DualRangeSlider;
