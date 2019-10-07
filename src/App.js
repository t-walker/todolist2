import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  
  componentDidMount() {
    this.setState({tasks: ['cook', 'clean', 'walk the dog']})
  }

  addItemToList() {
    const {tasks, taskBox} = this.state;

    this.setState({tasks: [...tasks, taskBox]});
    this.setState({taskBox: ''});
  }

  updateTaskBox(event) {
    this.setState({taskBox: event.target.value})
  }

  deleteTask(task) {
    const {tasks} = this.state;
    
    this.setState({tasks: tasks.filter((_task) => {
      if(task !== _task) {
        return true;
      }
    })})
  }

  render() {
    const {tasks, taskBox} = this.state;

    return (
      <div className="App">
        <h1>ToDo App</h1>
        <input onChange={(e) => this.updateTaskBox(e)} value={taskBox} />&nbsp;
        <button onClick={() => this.addItemToList()}>Submit</button>

        {tasks && tasks.map((task) => (
          <p>{task} <button onClick={() => this.deleteTask(task)}>Delete</button></p>
        ))}
      </div>
    )
  }
}

export default App;
