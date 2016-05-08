'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Detail from './page/Detail';

console.log('React is up and running!');

ReactDOM.render(
    <Detail message="This from props Value"/>, document.getElementById('app'));
