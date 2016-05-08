'use strict';

import React, {PropTypes} from 'react';
import ajax from 'SuperAgent'

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commits: []
        }
    }
    componentWillMount() {
        ajax.get('https://api.github.com/repos/saoleigroup/transform-app-server/commits').end((error, response) => {
            if (!error && response) {
                console.dir(response.body);
                this.setState({commits: response.body});
            } else {
                console.log('There was an error fetching from GitHub', error);
            }
        });
    }
    render() {
        const commits = this.state.commits.map((commit, index) => {
            const author = commit.author
                ? commit.author.login
                : 'Anonymous';
            return (
                <p>
                    <strong>{author}</strong>:
                    <a href={commit.html_url}>{commit.commit.message}</a>.
                </p>
            );
        })
        return (
            <div>
                {commits}
            </div>
        )
    }
}

export default Detail;
