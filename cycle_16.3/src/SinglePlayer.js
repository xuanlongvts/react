import React, { Component } from 'react';

class SinglePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPassed: false
        };
    }

    // Replace for componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');

        if (nextProps.score >= 100) {
            return {
                isPassed: true
            };
        } else {
            return {
                isPassed: false
            };
        }
    }

    componentDidMount() {
        console.log('componentDidMount => ', this.props.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.score === this.props.score) {
            console.log('shouldComponentUpdate => ', this.props.name + ' ? false');
            return false;
        }

        console.log('shouldComponentUpdate => ', this.props.name + ' ? true');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate => ', this.props.name);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: ', this.props.name);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        return null;
    }

    render() {
        const { score } = this.props;
        const { isPassed } = this.state;

        return (
            <div className="each-board">
                <h5>
                    <span>Name: </span> <strong>{this.props.name}</strong>
                </h5>
                <p>
                    <span>Score: </span> <em>{this.props.score}</em>
                </p>
                <p>
                    <span>Pass: </span>
                    <input type="checkbox" className="chk" checked={score > 60 ? true : false} onChange={() => null} />
                </p>
                {isPassed && <p className="pass">Score >= 100 </p>}
            </div>
        );
    }
}

export default SinglePlayer;
