import React from 'react';
import {Link} from 'react-router-dom';

import ContactEdit from './ContactEdit.jsx';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };

    this.remove = this.remove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  remove() {
    this.props.removeContact(this.props.index);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  save(name, number) {
    this.props.updateContact(this.props.index, name, number);
    this.toggleEdit();
  }

  render() {
    if (this.state.isEditing) {
      return <ContactEdit name={this.props.name}
        number={this.props.number}
        onSave={this.save} />
    }
    return <div>
      <span>Name: 
        <Link to={"/contacts/" + this.props.name}>{this.props.name}</Link>
      </span>
      <span>Number: <a href={"tel:" + this.props.number}>
          {this.props.number}
        </a>
      </span>
      <button onClick={this.remove}>remove</button>
      <button onClick={this.toggleEdit}>edit</button>
    </div>
  }
}

export default ContactItem;