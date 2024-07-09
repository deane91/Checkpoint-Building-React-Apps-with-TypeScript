import React, { Component } from 'react';

// Define the state interface for the component
interface CounterState {
  count: number;
}

// If there are props, define the props interface (empty in this case)
interface CounterProps {}

// Convert the class component to TypeScript and use the state and props interfaces
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

/*
Steps and Comments:
1.Define the State Interface: We define an interface CounterState that describes the shape of the state object. In this case, it has a single property count of type number.
2.Define the Props Interface: Although this component does not currently use props, we define an empty interface CounterProps for completeness and future scalability.
3.Convert the Component: We change the component to use TypeScript and specify the state and props types using Component<CounterProps, CounterState>. This tells TypeScript that Counter is a class component that expects props of type CounterProps and state of type CounterState.
4.Type the State: We explicitly type the state property with CounterState.
5.Adjust the Methods: No additional changes are needed for methods since TypeScript can infer the types based on the context provided by the interfaces.
*/
