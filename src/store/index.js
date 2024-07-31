import { configureStore } from '@reduxjs/toolkit';

import { nimbleApi } from './nimble/nimble.api';

export const store = configureStore({
  reducer: {
    [nimbleApi.reducerPath]: nimbleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nimbleApi.middleware),
});
