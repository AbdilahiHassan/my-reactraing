import React, { Component } from 'react';
import StaticCalc from './StaticCalc';
import UserCalc from './UserCalc';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello React</h1>
 
        <StaticCalc />
        <hr />
        <UserCalc />
<h1></h1>
            </div>
        );
    }
}

export default App;