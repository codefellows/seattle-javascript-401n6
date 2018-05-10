import React from 'react';
import {connect} from 'react-redux';
import './compose-email.scss';

import {
  sendEmail,
  startedSendingEmail,
  cancelledSendingEmail,
} from '../../actions/email-actions';

class ComposeEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancel: undefined
    };
    this.send = this.send.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  send(ev) {
    ev.preventDefault();
    // getElementsByName is only runable from top-level document. (annoying!)
    let to = document.getElementsByName('to')[0];
    let subject = document.getElementsByName('subject')[0];
    let body = document.getElementsByName('body')[0];
    
    let params = {to, subject, body};
    this.props.startedSendingEmail();
    let cancel = this.props.sendEmail(params);
    this.setState({...this.state, cancel});
  }

  cancel() {
    if (this.props.isSending && this.state.cancel) {
      console.log('cancelling');
      this.state.cancel();
      this.props.cancelledSendingEmail();
    }
  }

  render() {
    // React.Fragment is a special component that allows us to wrap
    // elements in a non-existent "zero-element" instead of using a <div>
    // why? don't ask me, ask these guys:
    // https://stackoverflow.com/questions/24368789/why-is-getelementsbyname-only-usable-from-document-in-javascript
    return <form className="compose-email" onSubmit={this.send}>
      {(this.props.isSending) ?
        <div className="butterbar">
          sending email...
          &nbsp;
          <span className="cancel" onClick={this.cancel}>cancel</span>
        </div>
        :
        null
      }
      <div>
        To: <input type="email" name="to" placeholder="steve-rip@apple.com"/>
      </div>
      <div>
        Subject: <input type="text" name="subject" placeholder="OSX updates"/>
      </div>
      <div>
        <div>Body:</div>
        <textarea name="body" col="80" row="40" placeholder="Please don't force me to update."></textarea>
      </div>
      <div>
        <button type="submit">Send</button>
        {this.props.isSending ?
          <button onClick={this.cancel}>Cancel</button> :
          <button disabled>Cancel</button>
        }

        {if(this.props.isSending) {
          <button onClick={this.cancel}>Cancel</button>
        } else {
          <button disabled>Cancel</button>
        }}
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
    sendEmail: params => dispatch(sendEmail(params)),
    startedSendingEmail: ()=> dispatch(startedSendingEmail()),
    cancelledSendingEmail: () => dispatch(cancelledSendingEmail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeEmail);

