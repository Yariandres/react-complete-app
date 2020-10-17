import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Nikola', age: 28 },
      { name: 'Yari', age: 48 },
      { name: 'Natalia', age: 5 }
    ],
  }

  switchNameHandler = () => {    
    this.setState({ 
      persons: [
        { name: 'Niko', age: 6 },
        { name: 'Yar', age: 48 },
        { name: 'Nat', age: 25 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({ 
      persons: [
        { name: 'Nikolska', age: 6 },
        { name: event.target.value, age: 48 },
        { name: 'Natalush', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello I am a react app!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Wikusha')}
          change={this.changeNameHandler}
        >
          I am a child element of the this Yari person component 
        </Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
