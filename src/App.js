import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state={
    burgers: [],
    selected: null,
    input: "",
    filter: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(resp => resp.json())
    .then(json => this.setState({
      burgers: json,
      filter: json
     },
      console.log("Burgers are fetched!")
    ))
  }

  handleClick = (action, burger) => {
    if (action === 'show') {
      this.setState({ selected: burger })
    } else if (action === 'delete') {
      let newArr = this.state.burgers.filter(burgers => burgers.id !== burger.id)
      this.setState({
        burgers: newArr,
        filter: newArr
      })
    }
  }

  handleFilter = (input) => {
    let filterBurgers
    if (input === "All") {
      filterBurgers = this.state.burgers
    } else {
      filterBurgers = this.state.burgers.filter(burger => burger.category === input)
    }
    this.setState({ filter: filterBurgers })
  }

  handleChange = (input, burger) => {
    burger.category = input
    this.setState({ selected: burger })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.filter}
        handleClick={this.handleClick}
        handleFilter={this.handleFilter}/>
        { this.state.selected ? <BurgerDisplay burger={this.state.selected}
        handleChange={this.handleChange}/> : null}
      </div>
    );
  }
}

export default App;
