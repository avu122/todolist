import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    items: [
      {
        name: 'Abcd',
        assignee: 'Abc',
        createAt: new Date().toLocaleString()
      }
    ],
    values: {
      name: '',
      assignee: ''
    }
  }

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {

    let newItem = {
      name: this.state.values.name,
      assignee: this.state.values.assignee,
      createAt: new Date().toLocaleString()
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      value: {}

    })

    event.preventDefault();

  };


  render() {

    const listItems = this.state.items.map((items, i) =>
      <li key={i}>
        <span>{this.state.items[i].name}</span>
        <span>{this.state.items[i].assignee}</span>
        <span>{this.state.items[i].createAt}</span>
      </li>
    );

    return (
      <div className="App">
        <h1>Todo List App</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" onChange={this.handleChange} value={this.state.values.name} type="text" placeholder="enter item" />
          <input name="assignee" onChange={this.handleChange} value={this.state.values.assignee} type="text" placeholder="enter item" />
          <button type="submit" >Submit Item</button>
        </form>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default App;
