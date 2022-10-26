export const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: (state.counter +1),
      };

    default:
      return state;
  }
};
