import { createStore } from "redux";

const INITIAL_STATE = {
  title: ["Initial title"],
  caso: ["Initial case, wow that is not only a case, but a big one!"],
};

function cases(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CASE":
      return {
        ...state,
        title: [...state.title, action.title],
        caso: [...state.caso, action.caso],
      };
    default:
      return state;
  }
}

const store = createStore(cases);

export default store;
