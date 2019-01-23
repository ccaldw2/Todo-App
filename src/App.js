import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/AddTodo.js';
import uuid from 'uuid';


class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      }
    ]
  };

  addTodo = (title) => {

    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </div>
        </div>
    );
  }
}

export default App;
