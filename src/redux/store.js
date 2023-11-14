import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  REHYDRATE,
  PERSIST,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import signupSlice from "./slices/signup.slice";

const rootReducer = combineReducers({
  auth: signupSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});




export const persistedStore = persistStore(store);