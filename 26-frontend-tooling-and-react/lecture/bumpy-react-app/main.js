console.log('loading file');

import React from 'react';
import ReactDOM from 'react-dom';

class MyCoolApp extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructing');
  }

  render() {
    console.log('rednering');
    return <div>
      <h1>My Cool app</h1>
    </div>;
  }
}

const root = document.getElementById('root');
ReactDOM.render(<MyCoolApp/>, root);
