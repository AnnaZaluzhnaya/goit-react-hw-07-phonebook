import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
// middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// devTools: process.env.NODE_ENV !== 'production',

// export const persistor = persistStore(store);
