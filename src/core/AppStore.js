import { createStore } from 'redux';

import reducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState
  );

  if (module.hot) {
    console.log('HMR ready');
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      let nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
