export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
        multiply: state.multiply * state.count,
      };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    default:
    //   throw new Error("no match");
  }
  return state;
};
