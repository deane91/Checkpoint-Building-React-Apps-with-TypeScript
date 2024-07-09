import React from 'react';

// Define the props interface for the component
interface GreetingProps {
  name: string;
}

// Convert the functional component to TypeScript and use the props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;



/*
Steps and Comments:
1.Define the Props Interface: We define an interface GreetingProps that describes the shape of the props object.
    In this case, it has a single property name of type string.

2.Convert the Component: We change the component to use TypeScript and specify the props type using React.
    FC<GreetingProps>. This tells TypeScript that Greeting is a functional component that expects props of type GreetingProps.
*/    