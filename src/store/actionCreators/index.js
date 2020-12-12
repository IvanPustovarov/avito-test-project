export const getData = (data) => {
  return { type: "ADD_DATA", data };
};

export const backToNews = () => {
  return {
    type: "BACK_TO_NEWS",
  };
};

export const clickOnRootComment = (id) => {
  return {
    type: "CLICK_ON_ROOT_COMMENT",
    id,
  };
};

export const onNews = (id) => {
  return {
    type: "CLICK_ON_NEWS",
    id,
  };
};

export const refreshComments = () => {
  return {
    type: "REFRESH_COMMENTS",
  };
};

export const refreshNews = () => {
  return {
    type: "REFRESH_NEWS",
  };
};
