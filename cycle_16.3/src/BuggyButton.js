import React, { Component } from 'react';

class BuggyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            releaseBugs: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            releaseBugs: true
        });
    }

    render() {
        const { releaseBugs } = this.state;
        if (releaseBugs) {
            return new Error('I crashed!');
        }

        return (
            <button className="btn" onClick={this.handleClick}>
                {'Scary Button!'}
            </button>
        );
    }
}

export default BuggyButton;
