'use strict';

import React from 'react/addons';
import DateField from './components/DateField';
import TimeField from './components/TimeField';
import SuperClock from './components/SuperClock';
import Clock from './components/Clock';
import ReactWebComponent from './webcomponent';

export function setupAt(node) {
  React.render(<SuperClock />, node);
  ReactWebComponent.registerWebComponent('devoxx-clock', Clock);
  ReactWebComponent.registerWebComponent('devoxx-superclock', SuperClock);
};
