import backToNewsReducer from "./reducers/backToNews";
import clickOnRootCommentReducer from "./reducers/clickOnRootComment";
import clickOnNewsReducer from "./reducers/clickOnNews";
import refreshCommentsReducer from "./reducers/refreshComments";
import refreshNewsReducer from "./reducers/refreshNews";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  backToNewsReducer,
  clickOnRootCommentReducer,
  clickOnNewsReducer,
  refreshCommentsReducer,
  refreshNewsReducer,
});

export { rootReducer };
