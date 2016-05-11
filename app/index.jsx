'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

require('./main.css');

console.log('React is up and running!');

render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
