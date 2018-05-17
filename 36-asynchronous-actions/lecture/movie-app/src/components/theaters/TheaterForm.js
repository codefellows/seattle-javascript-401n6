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
  }

  // writing class method with arrow-function so we don't have to bind.
  // warning: requires at least stage-2 babel-preset.
  handleChange = (ev) => {
    this.setState({name: ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    let name = ev.target.getElementsByTagName('input')[0].value;
    if (this.props.mode === "create") {
      this.props.createTheater(name);
    } else if (this.props.mode === "update") {
      // make sure to use ... spread operator on the original theater object
      // so it's all entirely copied and we're not mutating the object.
      // react and redux won't detect the change if we don't make a new one.
      let newTheater = {...this.props.theater, name};
      this.props.updateTheater(newTheater);
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
