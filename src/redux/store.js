import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from "./filter/filterSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store)