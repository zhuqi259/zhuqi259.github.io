import React, {Component} from 'react'

import {Link} from 'react-router';

class List extends Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li>
                        <Link to="/detail/sshe">sshe</Link>
                    </li>
                    <li>
                        <Link to="/detail/TuibianNow">TuibianNow</Link>
                    </li>
                    <li>
                        <Link to="/detail/transform-app-server">transform-app-server</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;
