import React, { Component } from 'react';

var t0 = performance.now();
class Statefull extends Component {
  render() {
    return (
        <div className="App">
            Statefull
        </div>
    );
  }
}
var t1 = performance.now();
console.log('Statefull: ', t1 - t0);
export default Statefull;