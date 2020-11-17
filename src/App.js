import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users }))
}

//writing methods as arrow functions means .this is automatically bound in the context in which it was created
//as this class, 'App' is the current context, this is automatically bound to to 'App' class
//...there is no need to bind .this within the constructor
handleChange = (e) => {
  this.setState({ searchField: e.target.value })
}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder = "search monsters..."
      handleChange = { this.handleChange }
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
}

export default App;
