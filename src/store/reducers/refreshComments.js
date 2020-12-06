const refreshCommentsReducer = (state = 0, action) => {
  switch (action.type) {
    case "REFRESH_COMMENTS":
      return state;
    default:
      return state;
  }
};
export default refreshCommentsReducer;
