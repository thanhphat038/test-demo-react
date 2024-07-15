import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Phat",
    address: "hoi dan it",
    age: 21,
  };

  handleClick(event) {
    console.log(" >> Click me my button");
    console.log("my name is", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  // jsx
  render() {
    return (
      <div>
        my name is {this.state.name} and im from {this.state.address}
        <button onMouseOver={this.handleOnMouseOver}>hover Me</button>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
