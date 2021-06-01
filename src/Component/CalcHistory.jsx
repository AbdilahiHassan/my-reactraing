import React, { Component } from 'react';



class CalcHistory extends Component {
    render() {

        const rows = this.props.previusResults.map((row, index) => (
            <tr key={index}>
              <td>{row.numA}</td>
              <td>{row.numB}</td>
              <td>{row.Result}</td>
            </tr>
          ));
    

  return (
            <table>
      <thead>
<tr>

    <th>
        NumA
    </th>
   < th>
        NumB
    </th>
 <th>
  Result:
    </th>
</tr>
 </thead>
 <tbody>
 {rows}
 
 </tbody>

            </table>
        );
    }
}

export default CalcHistory;