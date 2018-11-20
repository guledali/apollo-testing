import React, { Component } from 'react';
import  { Dog } from './dog';

class App extends Component {
  state = {
    name: "buck"
  }
  render() {
    return (
      <Dog name={this.state.name} />
    );
  }
}

export default App;
