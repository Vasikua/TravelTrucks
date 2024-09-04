import  {campersReducer}  from './campers/slice';
import { filterReducer } from './filter/slice';
import { favoriteReducer } from './favorite/slice';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';



const filtersPersistConfig = {
  key: 'filters',
  storage
 }
const favoritePersistConfig = {
  key: 'favorite',
  storage
}

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: persistReducer(filtersPersistConfig ,filterReducer),
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);