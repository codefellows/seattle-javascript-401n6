import React from 'react';

import Contact from './Contact.jsx';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return this.props.contacts.map((contact, index) => {
      return <Contact name={contact.name} number={contact.number}
        key={index} index={index}
        removeContact={this.props.removeContact}/>;
    });
  }

  render() {
    return <ul>
      {this.list()}
    </ul>
  }
}

export default ContactList;