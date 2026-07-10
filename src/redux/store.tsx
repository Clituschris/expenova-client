/* eslint-disable */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { UnknownAction } from '@reduxjs/toolkit';
import { reducers } from './mainReducer';

const resetStoreActionType = 'main/resetStore';

const combinedReducer = combineReducers(reducers);
export const rootReducer = (
  state: {} | Partial<{}> | undefined,
  action: UnknownAction
) => {
  if (action.type === resetStoreActionType) {
    state = undefined;
  }
  return combinedReducer(state, action as never);
};

const store = configureStore({
  reducer: rootReducer
});

export const resetStore = () => {
  store.dispatch({ type: resetStoreActionType });
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export default store;
