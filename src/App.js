import React, { Component } from 'react';
import { addTask, inputTask } from './action';

class App extends Component {
  render() {
    const {
      task,
      tasks
    } = this.props.store.getState().task;
    return (
      <div className="App">
        <input type="text" onChange={e => this.props.store.dispatch(inputTask(e.target.value))} />
        <input type="button" onClick={() => this.props.store.dispatch(addTask(task))} value="Input" />
        <ul>
          {tasks.map((task, i) => {
            return <li>{i}:{task}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;