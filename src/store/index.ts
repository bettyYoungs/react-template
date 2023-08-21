import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer, { USER_SLICE } from './user.slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
  manualPersist: true
}

const persistedReducer = persistReducer(persistConfig, combineReducers({ [USER_SLICE]: userReducer }))
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;