import React from 'react';
import ReactDOM from 'react-dom';
// import MultiSlider from './MultiSlider';
import DualRangeSlider from './DualRangeSlider';
import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <MultiSlider /> */}
    <DualRangeSlider min={70} max={7000} decimals={0} />
  </React.StrictMode>,
  document.getElementById('root')
);
;
