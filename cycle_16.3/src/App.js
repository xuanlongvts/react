import React, { Component } from 'react';
import './App.css';
import SinglePlayer from './SinglePlayer';
import BuggyButton from './BuggyButton';
import ErrorBoundary from './ErrorBoundary';

const initState = [
    {
        name: 'A',
        score: 80
    },
    {
        name: 'B',
        score: 50
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: initState
        };
    }

    changeScore(amount, type) {
        if (typeof amount !== 'number') {
            return false;
        }

        const { player } = this.state;
        player[0].score += amount;
        player[1].score += amount;

        this.setState({
            player: player
        });
    }

    render() {
        const { player } = this.state;

        return (
            <div className="App">
                <h1>React Component Lifecycle Demo >= 16.3</h1>

                <div className="list-btn">
                    <button onClick={() => this.changeScore(5)}>Score +5</button>{' '}
                    <button onClick={() => this.changeScore(-5)}>Score -5</button>{' '}
                </div>
                <div className="list-boards">
                    {player.map((item, key) => {
                        return <SinglePlayer key={key} name={item.name} score={item.score} />;
                    })}
                </div>
                <div className="error-lay">
                    <ErrorBoundary>
                        <BuggyButton />
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

export default App;
