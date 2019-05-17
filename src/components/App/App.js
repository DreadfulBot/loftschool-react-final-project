import React, { PureComponent } from 'react';

import Layout from '../Layout';
import Header from '../Header';
import Router from '../Router';
import Profile from '../Profile';

class App extends PureComponent {
  render() {
    return (
      <Layout header={Header}>
        <Profile />
      </Layout>
    );
  }
}

export default App;
