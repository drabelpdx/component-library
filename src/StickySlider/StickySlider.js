import React from 'react';
import Slider from 'rc-slider';
// require('rc-slider/assets/index.css');

const style = { width: 600, margin: 50 };
const marks = {
  1: {
    label: <strong>2007</strong>,
  },
  2: '2008',
  3: '2009',
  4: '2010',
  5: '2011',
  6: '2012',
  7: '2013',
  8: '2014',
  9: '2015',
  10: {
    label: <strong>2016</strong>,
  },
};

function log(value) {
  console.log(value); //eslint-disable-line
}

const StickySlider = ({ min, max, value, onChange }) => (
  <div style={style}>
    <p>My Sticky Slider</p>
    <Slider min={1} max={10} marks={marks} step={1} onChange={log} defaultValue={8} />
  </div>
);

export default StickySlider;
