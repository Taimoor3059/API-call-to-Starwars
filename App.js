import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      charecter: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading: false,
            charecter: data
          })
        })
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.charecter.name
    return (
      <div className="dabba">
        <p>{text}</p>
      </div>
    )
  }

}
export default App;
