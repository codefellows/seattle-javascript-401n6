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
    this.createContact = this.createContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  // contactInfo should be an object with .name and .number properties
  createContact(contactInfo) {
    let newArray = this.state.contacts.slice();
    newArray.push(contactInfo);
    this.setState({contacts: newArray});
  }

  // index should the index of a contact to remove inside the contacts list.
  removeContact(index) {
    let newArray = this.state.contacts.slice();
    newArray.splice(index, 1);
    this.setState({contacts: newArray});
  }

  render() {
    return <div>
      <ContactForm createContact={this.createContact} />
      <ContactList contacts={this.state.contacts}
        removeContact={this.removeContact} />
    </div>
  }
}

export default Contacts;