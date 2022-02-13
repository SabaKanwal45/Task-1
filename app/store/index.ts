import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import modules from './modules';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, modules.rootReducer);

const sagaMiddleware = createSagaMiddleware();
let store:any = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export default store;
export { store, persistor}

sagaMiddleware.run(modules.rootSagas);

export type RootState = ReturnType<typeof modules.rootReducer>;
