import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Router from '../Router';
import Header from '../Header';

class App extends PureComponent {
  render() {
    return (
      <Layout header={Header}>
        <Router />
      </Layout>
    );
  }
}

export default App;
