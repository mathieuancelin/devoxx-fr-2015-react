'use strict';

import React from 'react/addons';
import moment from 'moment';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>{moment().format(this.props.format)}</h1>
      </div>
    );
  }
});