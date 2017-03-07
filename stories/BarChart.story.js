import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { MyBar } from '../src';

const displayName = MyBar.displayName || 'MyBar';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const demoCode = () => (
  <MyBar data={[{ name: 'David', x: 200, y: 300 }]} />
);

const propDocs = { inline: true, propTables: [MyBar] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
