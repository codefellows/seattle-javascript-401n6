import React from 'react';
import {Link} from 'react-router-dom';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: this.props.number,
    };

    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  update(ev) {
    let newState = {};
    newState[ev.target.name] = ev.target.value;
    this.setState(newState);
  }

  save(ev) {
    ev.preventDefault();
    this.props.finishEdit(this.state);
  }

  cancel() {
    // send back an empty object because zero properties are updated.
    this.props.finishEdit({});
  }

  render() {
    return <form onSubmit={this.save}>
      <span>Name: 
        <input name="name" type="text" value={this.state.name} onChange={this.update}/>
      </span>
      <span>Number:
        <input name="number" type="text" value={this.state.number} onChange={this.update}/>
      </span>
      <button onClick={this.cancel}>cancel</button>
      <button type="submit" onClick={this.save}>save</button>
    </form>
  }
}

export default ContactEdit;