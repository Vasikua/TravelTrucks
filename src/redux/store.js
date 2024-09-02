import  {campersReducer}  from './campers/slice';
import  {filterReducer}  from './filter/slice';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filterReducer,
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);