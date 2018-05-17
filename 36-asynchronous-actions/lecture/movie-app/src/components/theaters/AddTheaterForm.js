import React from 'react';
import {connect} from 'react-redux';
import {createTheater} from '../../actions/theater-actions'

class AddTheaterForm extends React.Component {
  constructor(props) {
    super(props);
    this.createTheater = this.createTheater.bind(this);
  }

  createTheater(ev) {
    ev.preventDefault();
    let name = ev.target.getElementsByTagName('input')[0].value;
    this.props.createTheater(name);
  }

  render() {
      return <div className="add-theater-form">
        <h1>Movie Showtimes</h1>
        <form onSubmit={this.createTheater}>
          <input name="theater" type="text" placeholder="theater Name" />
          <input type="submit" placeholder="add theater" />
        </form>
      </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTheater: (name) => dispatch(createTheater(name))
  }
}

export default connect(null, mapDispatchToProps)(AddTheaterForm);
