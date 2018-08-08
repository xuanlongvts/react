import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            arr: {
                infor: [
                    {
                        name: 'Nam',
                        age: 10
                    },
                    {
                        name: 'Tuan',
                        age: 20
                    }
                ]
            },
            reRender: 0
        };

        this.handleChangeAge = this.handleChangeAge.bind(this);
    }

    handleChangeAge() {
        const {
            arr: { infor }
        } = this.state;
        let { reRender } = this.state;

        infor[0].age = 30;
        infor.push({
            name: 'Long',
            age: 25
        });

        // this.setState({
        //     reRender: ++reRender
        // });
    }

    render() {
        const {
            arr: { infor }
        } = this.state;
        console.log('infor: ', infor);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.handleChangeAge}>Change Age</button>

                <p className="listStaffs">List staffs</p>

                <ul className="ulList">
                    {infor.length > 0 &&
                        infor.map((item, key) => {
                            return (
                                <li key={key}>
                                    <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}
                                </li>
                            );
                        })}
                </ul>
            </div>
        );
    }
}

export default App;
