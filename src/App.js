import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import "./App.css"
import AddTodo from './Components/AddTodo';

export default class App extends Component {
  state ={
    list: [
     "Practice more on react", 
    "Start learning redux", 
    "watch and reproduce youtube tutorials",
    "Watch the new episode of my TV series",
    "Go jogging"
  ],  
  }

  handleAdd = (task) => {
    this.setState({list: [...this.state.list, task]})
  }

  handleDelete = (i) => {
    this.setState({list: this.state.list.filter((el, key) => key !==  i)})
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo handleAdd={this.handleAdd} />
        <TodoList list={this.state.list} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

