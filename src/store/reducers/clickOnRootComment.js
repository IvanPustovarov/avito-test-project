const clickOnRootCommentReducer = (state = 0, action) => {
  switch (action.type) {
    case "CLICK_ON_ROOT_COMMENT":
      return state;
    default:
      return state;
  }
};
export default clickOnRootCommentReducer;
