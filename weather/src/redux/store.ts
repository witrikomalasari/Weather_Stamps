import {combineReducers, configureStore} from '@reduxjs/toolkit';
import WeatherReducer from './reducers/WeatherReducer';

const reducers = combineReducers({
  weather: WeatherReducer,
  //   loading: loadingReducer,
  //   toast: toatsReducer,
});

export const store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself . for snippet
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
