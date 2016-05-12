'use strict';

import React, {Component} from 'react'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Unofficial GitHub Browser v1.0 for zhuqi259</h1>
                {this.props.children}
            </div>
        );
    }
}

export default App;
