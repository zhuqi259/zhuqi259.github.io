'use strict';

import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from './page/App';
import List from './page/List';
import Detail from './page/Detail';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={List}/>
        <Route path="detail/:repo" component={Detail}/>
    </Route>
);

export default routes;
