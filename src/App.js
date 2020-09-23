import React, { Component } from "react";
//import './App.css';
import Autocomplete from "./AutoComplete";


class App extends Component {

  constructor(){
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount(){
    fetch(`http://www.mocky.io/v2/5ba8efb23100007200c2750c`)
    .then(response => response.json())
    .then(json => {
      this.setState({ data: json });
    })
    .catch((error) => console.log(error));
  }

  render(){
    return (
      <div className="App">
        <Autocomplete
          options={this.state.data}
        />
      </div>
    );
  }
};

export default App;
