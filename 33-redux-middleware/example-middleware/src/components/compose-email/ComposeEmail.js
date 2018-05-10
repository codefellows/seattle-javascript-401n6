import React from 'react';
import {connect} from 'react-redux';
import './compose-email.scss';

import {
  startSendingEmail,
  cancelSendingEmail,
} from '../../actions/email-actions';

class ComposeEmail extends React.Component {
  constructor(props) {
    super(props);
    this.send = this.send.bind(this);
  }

  send(ev) {
    ev.preventDefault();
    // getElementsByName is only runable from top-level document. (annoying!)
    let to = document.getElementsByName('to')[0];
    let subject = document.getElementsByName('subject')[0];
    let body = document.getElementsByName('body')[0];
    
    let params = {to, subject, body};
    console.log(params);
    this.props.startSendingEmail(params);
  }

  render() {
    // React.Fragment is a special component that allows us to wrap
    // elements in a non-existent "zero-element" instead of using a <div>
    // why? don't ask me, ask these guys:
    // https://stackoverflow.com/questions/24368789/why-is-getelementsbyname-only-usable-from-document-in-javascript
    return <form className="compose-email" onSubmit={this.send}>
      {(this.props.isSending || true) ?
        <div className="butterbar">
          sending email...
          &nbsp;
          <span className="cancel" onClick={this.props.cancelSendingEmail}>cancel</span>
        </div>
        :
        null
      }
      <div>
        To: <input type="email" name="to"/>
      </div>
      <div>
        Subject: <input type="text" name="subject"/>
      </div>
      <div>
        <div>Body:</div>
        <textarea name="body" col="80" row="40"></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
        {this.props.isSending ?
          <button onClick={this.props.cancelSendingEmail}>Cancel</button> :
          <button disabled>Cancel</button>
        }
      </div>
    </form>
  }
}

function mapStateToProps(state) {
  return {
    isSending: state.email.isSending
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startSendingEmail: params => dispatch(startEndingEmail(params)),
    cancelSendingEmail: () => dispatch(cancelSendingEmail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeEmail);

