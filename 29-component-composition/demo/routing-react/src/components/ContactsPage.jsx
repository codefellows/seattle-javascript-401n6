import React from 'react';

import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts:  [
        {name: "Mom", number: "555-111-9999"},
        {name: "Dad", number: "555-111-8000"},
        {name: "Landlord", number: "555-637-5309"},
    ]};
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addContact(contact) {
    console.log('got new contact', contact);
    this.state.contacts.push(contact);
    this.setState({contacts: this.state.contacts});
  }

  removeContact(index) {
    console.log('page removing', index);
    this.state.contacts.splice(index, 1);
    this.setState({contacts: this.state.contacts});
  }

  render() {
    return <div>
      <ContactForm addContact={this.addContact}/>
      <ContactList contacts={this.state.contacts} 
        removeContact={this.removeContact}/>
    </div>
  }
}

export default Contacts;