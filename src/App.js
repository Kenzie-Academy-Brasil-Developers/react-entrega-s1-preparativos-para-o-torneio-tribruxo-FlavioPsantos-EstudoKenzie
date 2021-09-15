
import './App.css';
import { Component } from 'react';
import Students from './Components/Students';

class App extends Component {
  state = {
    students: [],
  }
  componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then(response => {
        return response.json()
      })
      .then(response => this.setState({ students: response}))
      .catch((error) => console.log(error))
  }
  // componentDidUpdate() {
  //   fetch("http://hp-api.herokuapp.com/api/characters/students")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => this.setState({ students: response}))
  //     .catch((error) => console.log(error))
  // }
  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        
         <Students students={students} update={this.componentDidUpdate}/>
        </header>
      </div>
    );
  }
}

export default App;
