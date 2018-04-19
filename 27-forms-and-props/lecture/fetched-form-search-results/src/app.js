import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Movie Search',
      results: ["Rushmore", "Royal Tenenbaums", "Isle of Dogs", "Rushmore"],
      hasSearched: false,
      loading: false
    }
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(query) {
    this.setState({
      hasSearched: true,
      isLoading: true
    })


    var that = this;
    setTimeout(() => {
      console.log('app performSearch query:', query);
      // do some sort of action search thing
      // eventually get results and set them to the state
      if (query === "ttt") {
        that.setState({results: ["Kill Bill", "Kill Bill 2"]});
        that.setState({isLoading: false});
      } else {
        that.setState({results: []});
        that.setState({isLoading: false});
      }
    }, 800);
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm search={this.performSearch} />
      <SearchResults results={this.state.results} 
        hasSearched={this.state.hasSearched}
        isLoading={this.state.isLoading}/>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);