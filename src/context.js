import React, {createContext, useReducer} from 'react';

const initialState = {
    theme: 'dark',
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'SWITCH_THEME':
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        return {...state, theme: newTheme};
      default:
        throw new Error(`What are you trying to do? Couldn't recognize action type ${action.type}`);
    };
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }