import React from 'react';
import DashBoard from './Dashboard';
import TimestampList from './TimestampList';
import ComposeEmail from './compose-email/ComposeEmail';

class MainPage extends React.Component {
  render() {
    // React.Fragment is a special component that allows us to wrap
    // elements in a non-existent "zero-element" instead of using a <div>
    return <React.Fragment>
      <ComposeEmail />
      <DashBoard />
      <TimestampList />
    </React.Fragment>
  }
}

export default MainPage;

