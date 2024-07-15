import React from "react";

class MyComponent extends React.Component {
  
  state = {
    name: 'Phat',
    address:'hoi dan it',
    age: 21
  };
  
  // jsx
  render() {
    return(
    <div>
      my name is {this.state.name} and im from {this.state.address}
    </div>
  );
  }
}

export default MyComponent;
