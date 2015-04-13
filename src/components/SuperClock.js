'use strict';

import React from 'react/addons';
import moment from 'moment';
import DateField from './DateField';
import TimeField from './TimeField';
import Clock from './Clock';

export default React.createClass({
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <DateField format="DD/MM/YYYY" />
          <TimeField format="HH:mm:ss" />
        </div>
        <Clock width="120" height="120"/>
      </div>
    );
  }
});