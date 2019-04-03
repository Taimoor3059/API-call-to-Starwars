import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor() {
      super()
      this.state = {
          loading: true,
          character: []
      }
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

  render() {
    return (
      <div className='dabba'>
        <ul>
            {
                this.state.loading ? 'loading...' : this.state.character.results.map( (person, idx) => {
                    return <li key={idx}>Name: {person.name} || Height: {person.height}</li>
                })
            }
        </ul>

      

      </div>
    );
  }
}

export default App;
