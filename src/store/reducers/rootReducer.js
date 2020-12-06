import backToNewsReducer from "./backToNews";
import clickOnRootCommentReducer from "./clickOnRootComment";
import clickOnNewsReducer from "./clickOnNews";
import refreshCommentsReducer from "./refreshComments";
import refreshNewsReducer from "./refreshNews";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  backToNewsReducer,
  clickOnRootCommentReducer,
  clickOnNewsReducer,
  refreshCommentsReducer,
  refreshNewsReducer,
});

export default rootReducer;
