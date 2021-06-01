import React, { Component } from 'react';
import CalcHistory from './CalcHistory';
class UserCalc extends Component {

    state={
        num1:0,
        num2:0,
        Result:0,
        history:[], 
    };

    changeValueofnum1 = (event) => {
       // console.log(event.target.value);
        this.setState({
         
       num1: Number(event.target.value),
        });
    };
    changeValueofnum2 =(event) =>{

//console.log(event.target.value);
this.setState({
num2: Number(event.target.value),
});
    };

    doAdd =()=>{

       const num1 = this.state.num1;
        const num2 = this.state.num2;
        const Result = num1 + num2;
        this.setState({
            Result: Result,
            
            //Number(this.state.num1) + Number(this.state.num2),
        });
        this.saveHistory(num1,num2, Result);
    };

    doSub =()=>{
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const Result = num1 - num2;
        this.setState({
            
            Result: Result,
            
            //Number(this.state.num1) - Number(this.state.num2),
        });
        this.saveHistory(num1,num2, Result);
    };
    saveHistory = (num1, num2, Result ) => {
        const historyEvent = {
          numA: num1,
          numB: num2,
          Result: Result,
        };
 let newhistoryArray = this.state.history;
 newhistoryArray.push(historyEvent);
 this.setState({history: newhistoryArray});
    };
   //
    render() {
        return (
            <div>
                <input type="number" value={this.state.num1} onChange={this.changeValueofnum1} /> 
                <input type="number" value={this.state.num2} onChange={this.changeValueofnum2} />
                <button onClick={this.doAdd}>Addition</button>
                <button onClick={this.doSub}>Subtraction</button>
                <p>Result:{this.state.Result}</p>

                <CalcHistory  previusResults = {this.state.history}/>
                <p></p>
            </div>
        );
    }
}

export default UserCalc;