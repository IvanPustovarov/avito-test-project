const reducer = (state, action) => {
  switch (action.type) {
    case "BACK_TO_NEWS":
      return state;
    case "CLICK_ON_ROOT_COMMENT":
      return state;
    case "CLICK_ON_NEWS":
      return state;
    case "REFRESH_COMMENTS":
      return state;
    case "REFRESH_NEWS":
      return state;

    default:
      return state;
  }
};

export default reducer;
