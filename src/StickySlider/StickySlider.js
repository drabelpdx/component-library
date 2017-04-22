import React from 'react';
import Slider from 'rc-slider';
// require('rc-slider/assets/index.css');

const StickySlider = ({ min, max, value, marks, style, onChange }) => (
  <div style={style}>
    <p>My Sticky Slider</p>
    <Slider min={min} max={max} marks={marks} tipFormatter={null} step={1} onChange={onChange} defaultValue={value} />
  </div>
);

export default StickySlider;
