import React from 'react';
import {Link} from 'react-router-dom';

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.removeContact(this.props.index);
  }

  render() {
    return <div>
      <span>Name: 
        <Link to={"/contacts/" + this.props.number}>
          {this.props.name}
        </Link>
      </span>
      <span>Number: <a href={"tel:" + this.props.number}>
          {this.props.number}
        </a>
      </span>
      <button onClick={this.remove}>remove</button>
    </div>
  }
}

export default ContactItem;