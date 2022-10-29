import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksReducer as tasks } from "./tasks";
import { pointsReducer as points } from "./points";

const reducer = combineReducers({ tasks, points });

export { tasksActions } from "./tasks";
export { pointsActions } from "./points";

export default configureStore({
  reducer,
});
