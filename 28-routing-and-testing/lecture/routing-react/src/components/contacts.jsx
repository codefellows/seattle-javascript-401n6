import React from 'react';

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
  }

  render() {
    return <ul>
      <ContactList contacts={this.state.contacts}/>
    </ul>
  }
}

export default Contacts;