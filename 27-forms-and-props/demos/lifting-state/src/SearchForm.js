import React from 'react';
import faker from 'faker';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    let query = ev.target.value;
    this.setState({query});
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.submit(this.state.query);
  }

  render() {
    return <div>
      <form onSubmit={this.onSubmit}>
        <input type="text"
          placeholder="search"
          value={this.state.query}
          onChange={this.onChange}>
        </input>
      </form>
    </div>
  }
}

module.exports = SearchForm;
