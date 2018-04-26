import React from 'react';
import {Link} from 'react-router-dom';
import ContactEdit from './ContactEdit.jsx';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: this.props.name,
      number: this.props.number
    }
    this.remove = this.remove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  remove() {
    this.props.removeContact(this.props.index);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  finishEdit(contactInfo) {
    console.log('finish', contactInfo);
    this.setState(contactInfo);
    this.setState({isEditing: false});
  }

  render() {
    if (this.state.isEditing) {
      return <ContactEdit name={this.props.name}
        number={this.props.number}
        finishEdit={this.finishEdit}/>
    }
    return <div onDoubleClick={this.toggleEdit}>
      <span>Name: 
        <Link to={"/contacts/" + this.state.number}>
          {this.state.name}
        </Link>
      </span>
      <span>Number: <a href={"tel:" + this.state.number}>
          {this.state.number}
        </a>
      </span>
      <button onClick={this.remove}>remove</button>
      <button onClick={this.toggleEdit}>edit</button>
    </div>
  }
}

export default Contact;