import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // Handle input changes for the new task
  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  // Handle form submission to add a new task
  handleSubmit = (e) => {
    e.preventDefault();
    const { newTask, tasks } = this.state;
    if (newTask.trim() === '') return;

    // Add the new task to the tasks array
    this.setState({
      tasks: [...tasks, { text: newTask, completed: false }],
      newTask: '',
    });
  };

  // Handle task completion
  handleComplete = (index) => {
    const { tasks } = this.state;
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  // Handle task removal
  handleRemove = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h2>To-Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => this.handleComplete(index)}
              >
                {task.text}
              </span>
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
