import React, { Component } from 'react';


// // state data for 3 counters
// const data = [
//   { id: 1, value: 0 },
//   { id: 2, value: 0 },
//   { id: 3, value: 0 },
// ];

// Counter Component
class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
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
    let { value } = this.props;
    let {count} = this.state;
    value = count;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={this.onDecrement}>-</button>
          <button className="button is-success is-small" onClick={this.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}



class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ]
  }
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
        <Total />
      </div>
    );
  }
}

class Total extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }
  
  totalCount = () =>{
    this.setState({
      count: this.state.count
    });
  } ;
  
  render() {
    let { value } = this.props;
    let {count} = this.state;
    value = count;
    return (
      
      <div className="totalCount">
        <div className="total-count">
          <b>{value}</b>
         <button className="totalCount" onClick={this.totalCount}>Total Count</button>     
        </div>
      </div>
    );
  }
}

export default App;
