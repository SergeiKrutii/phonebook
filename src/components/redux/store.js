import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import contactsReducer from "./contacts/contactsSlice";
import themeReducer from "./theme/themeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const themePersistConfig = {
  key: "globalTheme",
  storage,
  whitelist: ["value"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    globalTheme: persistReducer(themePersistConfig, themeReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
