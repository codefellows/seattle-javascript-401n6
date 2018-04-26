import React from 'react';

import ContactItem from './ContactItem.jsx';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  list() {
    return this.props.contacts.map((contact, index) => {
      // react doesn't actually pass the key prop into the component
      // so I'm explicitly creating another prop called index so the component
      // can access it
      return <ContactItem name={contact.name} number={contact.number}
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