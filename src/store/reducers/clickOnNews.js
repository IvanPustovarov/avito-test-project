const clickOnNewsReducer = (state = 0, action) => {
  switch (action.type) {
    case "CLICK_ON_NEWS":
      return state;
    default:
      return state;
  }
};
export default clickOnNewsReducer;
