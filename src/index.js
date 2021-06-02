import React from 'react';
import ReactDOM from 'react-dom';
// import MultiSlider from './MultiSlider';
import DualRangeSlider from './DualRangeSlider';
import "./reset.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <MultiSlider /> */}
    <DualRangeSlider min="12" max="70"/>
  </React.StrictMode>,
  document.getElementById('root')
);
;
