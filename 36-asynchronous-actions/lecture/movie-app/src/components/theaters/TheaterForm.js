import React from 'react';
import {connect} from 'react-redux';
import {createTheater, updateTheater} from '../../actions/theater-actions'

class TheaterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: undefined};
    if (this.props.theater && this.props.theater.name) {
      this.state.name = this.props.theater.name;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({name: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let name = ev.target.getElementsByTagName('input')[0].value;
    if (this.props.mode === "create") {
      this.props.createTheater(name);
    } else if (this.props.mode === "update") {
      this.props.theater.name = name;
      this.props.createTheater(this.props.theater);
    }
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input name="theater" type="text" placeholder="theater Name"
       onChange={this.handleChange} value={this.state.name}/>
      <input type="submit" value={this.props.mode} />
    </form>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTheater: (name) => dispatch(createTheater(name)),
    updateTheater: (theater) => dispatch(updateTheater(theater))
  }
}

export default connect(null, mapDispatchToProps)(TheaterForm);
