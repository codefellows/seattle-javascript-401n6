import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lifting State",
      results: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm submit={this.handleSubmit} />
      <SearchResults results={this.state.result} />
    </div>
  }

  handleSubmit(query) {
    console.log('q:', query);
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
