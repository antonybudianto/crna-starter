const initialState = {
  appName: 'CRNA Starter'
};

const UPDATE_APP_NAME = 'app/global/UPDATE_APP_NAME';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_APP_NAME:
      return Object.assign({}, state, {
        appName: action.payload
      });
    default:
      return state;
  }
};

export function updateAppName(name) {
  return {
    type: UPDATE_APP_NAME,
    payload: name
  };
}
