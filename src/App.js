import React, { Component } from 'react';

import Header from './components/Header';
import Main from './routes/Main';

//provider
import { AuthProvider } from './contexts/authContext';

const AppProviders = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

class App extends Component {
  render() {
    return (
      <AppProviders contexts={[AuthProvider]}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </AppProviders>
    );
  }
}

export default App;
