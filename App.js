import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/core/AppStore';
import AppWithNavigationState from './src/core/AppWithNavigationState';

export default class App extends React.Component {
  state = {
    store: configureStore()
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppWithNavigationState></AppWithNavigationState>
      </Provider>
    );
  }
}
