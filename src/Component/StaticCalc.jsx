import React, { Component } from 'react';

class StaticCalc extends Component {


    state ={
        NumA:3,
        NumB:6,
    
    }
    render() {
        return (
            <div>
                 <h1>From static File</h1>
            <p>NumA:{this.state.NumA}</p>
            <p>NunB:{this.state.NumB}</p>
            <p>Result: {this.state.NumB + this.state.NumA}</p>
         <p></p>
            </div>
        );
    }
}

export default StaticCalc;



