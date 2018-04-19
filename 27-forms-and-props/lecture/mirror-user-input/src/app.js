import React from 'react';
import ReactDOM from 'react-dom';
import UserInputMirrorer from './components/UserInputMirrorer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mirror User Input',
      prompt1: 'Name',
      prompt2: 'Number',
    }
    this.makeAlert = this.makeAlert.bind(this);
  }

  makeAlert(param) {
    alert(param);
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <UserInputMirrorer title={this.state.prompt1}
                         appFunc={this.makeAlert}/>
      <UserInputMirrorer title={this.state.prompt2}
                         appFunc={this.makeAlert}/>
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);