const backToNewsReducer = (state = 0, action) => {
  switch (action.type) {
    case "BACK_TO_NEWS":
      return state;
    default:
      return state;
  }
};
export default backToNewsReducer;
