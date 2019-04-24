import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    getalx: 1,
    getaly: 2
  }

  getalxChangedHandler = (event) => {
    this.setState({
      getalx: event.target.value,
    })
  }

  getalyChangedHandler = (event) => {
    this.setState({
      getaly: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Oefening sum X + Y</h1>
          <UserInput
            getalx={this.state.getalx}
            getaly={this.state.getaly}
            sum={this.state.sum}
            changed1={this.getalxChangedHandler}
            changed2={this.getalyChangedHandler} >
          </UserInput>
          <UserOutput 
            getalx={this.state.getalx}
            getaly={this.state.getaly}
          >
          </UserOutput>
        </header>
      </div>
    );
  }
}

export default App;
