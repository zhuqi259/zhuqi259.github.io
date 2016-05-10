'use strict';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Detail from './page/Detail';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

console.log('React is up and running!');

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={Detail}/>
</Router>, document.getElementById('app'));
