import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { StickySlider } from '../src';

const displayName = StickySlider.displayName || 'StickySlider';
const title = 'Simple usage';
const description = `
  This is some basic usage with the sticky slider component as built for Raise Effect, updated with changes for latest rc-slider. Due to the nature of the component, a higher order component is required to contain local state.
  Sliding should trigger changes that affect the local state.`;

const demoCode = () => (
  <StickySlider
    min={0}
    max={10}
    value={3}
  />
);


// const propDocs = { inline: true, propTables: [StickySlider] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
  );
