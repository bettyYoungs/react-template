import { configureStore } from '@reduxjs/toolkit';
import loginReducer, { LOGIN_SLICE } from './login.slice'

const store = configureStore({
  reducer: {
    [LOGIN_SLICE]: loginReducer
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;