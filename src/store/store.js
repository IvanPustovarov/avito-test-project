import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
      // case ACTION_1: return { value: action.value_1 };
      // case ACTION_2: return { value: action.value_2 };
      // case ACTION_3: return { value: action.value_3 };
      // case ACTION_4: return { value: action.value_4 };
      // case ACTION_5: return { value: action.value_5 };

      default: return state;
  }
}

const store = createStore(reducer);

export default store;