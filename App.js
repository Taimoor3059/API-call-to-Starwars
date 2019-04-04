import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor() {
      super()
      this.state = {
          loading: true,
          character: [],
          newChar: []
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
      
      fetch("https://swapi.co/api/people/?page=2")
          .then(response => response.json())
          .then(data => {
              this.setState({
                  loading: false,
                  character: data
              })
              console.log(this.state.character.results);        
          })
  }

  handleSubmit() {
      let rand = Math.floor(Math.random() * this.state.character.results.length);

    this.setState({
        loading: false,
        newChar: this.state.character.results[rand]
    }) 
  }

  render() {
    return (
      <div className='dabba'>
        <button onClick={this.handleSubmit}>Press to get Charector Info</button>
        <br />
        <br />

        <h2>Charector Info</h2>
        <br />
        
        { this.state.loading ? 'Loading...' :  
            <div>
                <p>Name: {this.state.newChar.name}</p> 
                <br />
                <p>Height: {this.state.newChar.height}</p>
                <br />
                <p>Hair-Color: {this.state.newChar.hair_color}</p>
            </div>

        }

      </div>
    );
  }
}

export default App;
