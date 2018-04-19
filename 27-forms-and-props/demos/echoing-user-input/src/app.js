import React from 'react';
import ReactDOM from 'react-dom';
import UserInputForm from './UserInputForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "my React app"
    };
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <UserInputForm />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
