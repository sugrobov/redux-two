import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
//  FLUSH_ACTION,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import productsReducer from '../features/productsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

const store = configureStore({
  reducer: {
     products: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [/* FLUSH_ACTION, */ REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import productsReducer from "../features/productsSlice";

// export default configureStore({
//     reducer: {
//         products: productsReducer
//     }
// });