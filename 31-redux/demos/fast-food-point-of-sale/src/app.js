import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import MenuData from './data/jack-in-the-box'
import './main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Menu menu={MenuData} />
    </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
