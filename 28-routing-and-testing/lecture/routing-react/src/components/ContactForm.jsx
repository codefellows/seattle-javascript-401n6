import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateName = this.updateName.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateName(ev) {
    this.setState({name: ev.target.value});
  }

  updateNumber(ev) {
    this.setState({number: ev.target.value});
  }

  submit(ev) {
    ev.preventDefault();
    let contact = {name: this.state.name, number: this.state.number};
    this.props.addContact(contact);
    this.setState({
      name: '',
      number: '',
    })
  }

  render() {
    return <form onSubmit={this.submit}>
      <input type="text" name="name" value={this.state.name}
        placeholder="name"
        onChange={this.updateName}/>
      <input type="text" name="number" value={this.state.number}
        placeholder="number"
        onChange={this.updateNumber}/>
      <input type="submit" value="Add Contact" />
    </form>
  }
}

export default ContactForm;