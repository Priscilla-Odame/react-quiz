import React, { Component } from 'react';
import ReactDOM from "react-dom";


// state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
// ];

// Counter Component
class Counter extends Component {
  constructor() {
    super();
    count = 0;
  }
  
  onIncrement = () =>{
    this.setState({
      count: this.state.count + 1
    });
 
  } ;
  onDecrement = () =>{
    this.setState({
      count: this.state.count - 1
    });
  } ;
  render() {
    const { value } = this.props;
    let {count} = this.state;
    value= count;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick = {this.onDecrement}>-</button>
          <button className="button is-success is-small" onClick= {this.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

class Total extends Component {
  totalCount = e => {
    this.props();
  };

  render() {
    const { value } = this.props;
    return (
      <div className="totalCount">
        <b>{value}</b>
        <div className="total-count">
          <button className="totalCount" onClick={`The total Count is: ${getElementById('1', '2', '3', '4')}`}>Total Count</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={ 
      data: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ]
  }

  }

  render() {
    return (
      <div>
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default App;
