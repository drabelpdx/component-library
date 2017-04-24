import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { StickySlider } from '../src';

const displayName = StickySlider.displayName || 'StickySlider';
const title = 'Simple usage';
const description = `
  This is some basic usage with the sticky slider component.
  Sliding should trigger changes that affect the local state.
  Clicking the "Play" button moves the slider over all the values.`;

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

const demoCode = () => (
  <StickySlider
    min={1}
    max={10}
    value={4}
    step={1}
    marks={marks}
    style={style}
  />
);

const propDocs = { inline: true, propTables: [StickySlider] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
