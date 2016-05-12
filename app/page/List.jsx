import React, {Component} from 'react'

import {Link} from 'react-router';

class List extends Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li>
                        <Link to="/detail/SmartAnalysis">SmartAnalysis</Link>
                    </li>
                    <li>
                        <Link to="/detail/WebCrawler">WebCrawler</Link>
                    </li>
                    <li>
                        <Link to="/detail/ptfee">ptfee</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;
