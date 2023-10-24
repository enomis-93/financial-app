import { createStore } from "redux";
const initialState = {
  dialog: false,
};

const saveReducer = (state = { dialog: initialState }, action) => {
  switch (action.type) {
    case 'TOGGLE_BOOLEAN':
      return { ...state, dialog: !state.dialog };

    default:
      return state;
  }
};

const store = createStore(saveReducer);

export default store;
