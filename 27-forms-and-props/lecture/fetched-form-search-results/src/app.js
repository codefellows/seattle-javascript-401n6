import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Movie Search',
      results: ["Rushmore", "Royal Tenenbaums", "Isle of Dogs", "Rushmore"]
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm />
      <SearchResults results={this.state.results} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);