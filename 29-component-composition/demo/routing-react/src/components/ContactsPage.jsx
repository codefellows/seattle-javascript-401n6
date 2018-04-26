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
    this.editContact = this.editContact.bind(this);
  }

  addContact(contact) {
    this.state.contacts.push(contact);
    this.setState({contacts: this.state.contacts});
  }

  removeContact(index) {
    this.state.contacts.splice(index, 1);
    this.setState({contacts: this.state.contacts});
  }

  editContact(contactInfo, index) {
    let newArray = [...this.state.contacts];
    newArray[index] = contactInfo;
    this.setState({contacts: newArray});
  }

  render() {
    return <div>
      <ContactForm addContact={this.addContact}/>
      <ContactList contacts={this.state.contacts} 
        removeContact={this.removeContact}
        editContact={this.editContact}/>
      <ContactList contacts={this.state.contacts} 
        removeContact={this.removeContact}
        editContact={this.editContact}/>
    </div>
  }
}

export default Contacts;