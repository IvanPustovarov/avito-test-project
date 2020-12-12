const newsReducers = (state = 0, action) => {
  switch (action.type) {
    case "BACK_TO_NEWS":
      return state;
    case "REFRESH_COMMENTS":
      return state;
    case "CLICK_ON_ROOT_COMMENT":
      return state;
    default:
      return state;
  }
};
export default newsReducers;
