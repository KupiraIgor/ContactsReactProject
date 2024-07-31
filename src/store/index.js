import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { nimbleApi } from './nimble/nimble.api';

export const store = configureStore({
  reducer: {
    [nimbleApi.reducerPath]: nimbleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nimbleApi.middleware),
});

setupListeners(store.dispatch);
