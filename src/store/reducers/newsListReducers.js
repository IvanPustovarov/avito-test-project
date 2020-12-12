const newsListReducers = (state = 0, action) => {
  switch (action.type) {
    case "CLICK_ON_NEWS":
      return state;
    case "REFRESH_NEWS":
      return state;
    default:
      return state;
  }
};
export default newsListReducers;
