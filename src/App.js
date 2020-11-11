import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        ID: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        ID: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        ID: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
  );
  }
}

export default App;
