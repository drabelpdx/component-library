import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook'; // eslint-disable-line
import buttonStory from './Button.story';
import leafletStory from './Leaflet.story';
import storycardStory from './StoryCard.story';
import storyLinkStory from './StoryLink.story';
import storyFooterStory from './StoryFooter.story';
import editableStory from './Editable.story';
import pieStory from './Pie.story';
import sliderStory from './Slider.story';
import barChartStory from './BarChart.story';
import dropdownStory from './DropdownMenu.story';
import headerStory from './Header.story';
import Welcome from './Welcome';

import '../src/global.styles.css';

// stories can be added directly here
storiesOf('Welcome', module)
.add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

// or imported as functions from files then composed in the order you invoke them
editableStory();
headerStory();
buttonStory();
leafletStory();
storyLinkStory();
storyFooterStory();
storycardStory();
pieStory();
barChartStory();
sliderStory();
dropdownStory();