const refreshNewsReducer = (state = 0, action) => {
  switch (action.type) {
    case "REFRESH_NEWS":
      return state;

    default:
      return state;
  }
};

export default refreshNewsReducer;
