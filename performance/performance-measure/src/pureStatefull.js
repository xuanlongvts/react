import React, { Component } from 'react';

var t0 = performance.now();
class PureStatefull extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRender: 1
        };
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    render() {
        // const _this = this;
        const { isRender } = this.state;
        setTimeout(() => {
            this.setState({
                isRender: 2
            })   
        }, 3000);

        if (isRender === 1) {
            return (
                <div className="App">
                    PureStatefull
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    2222222222
                </div>
            );
        }
        
    }
}
var t1 = performance.now();
console.log('PureStatefull: ', t1 - t0);
export default PureStatefull;