import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import faker from 'faker';
import {say} from 'cowsay';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 101
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState(state => {
      return {count: state.count + 1};
    });
  }

  render() {
    return <div onClick={this.increment}>
      This has been clicked {this.state.count} times
    </div>
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "My React Appsss!!",
      admin: faker.internet.email(),
      content: say({text: faker.hacker.phrase()})
    }
  }

  render() {
    return <div>
      <h1>{this.state.name}</h1>
      <p>
        Hello! welcome to {this.state.name}.
        Here at {this.state.name} we believe
        in creating fluid UX...
      </p>
      <p>
        {this.state.admin} admins this site.
      </p>
      <pre>{this.state.content}</pre>
      <ClickCounter></ClickCounter>
      <ClickCounter></ClickCounter>
      <ClickCounter></ClickCounter>
      <ClickCounter></ClickCounter>
    </div>;
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);
