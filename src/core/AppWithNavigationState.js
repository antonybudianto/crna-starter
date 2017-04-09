import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './AppNavigator';

const App = ({dispatch, nav}) => {
  return (
    <AppNavigator navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })} />
  );
}

const mapStateToProps = ({nav}) => ({
  nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
