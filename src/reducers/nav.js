import AppNavigator from '../core/AppNavigator';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state);
};

export default navReducer;
