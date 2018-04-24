import React from 'react';
import {Link} from 'react-router-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
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
    </div>
  }
}

export default Contact;