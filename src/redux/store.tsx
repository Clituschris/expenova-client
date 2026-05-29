import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducers } from "./mainReducer";

const resetStoreActionType = "main/resetStore";

const combinedReducer: any = combineReducers(reducers);
export const rootReducer = (
  state: {} | Partial<{}> | undefined,
  action: any
) => {
  if (action.type === resetStoreActionType) {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export const resetStore = () => {
  store.dispatch({ type: resetStoreActionType });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;