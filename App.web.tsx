import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import AppNavigator from './app/navigation';
import {  store, persistor } from './app/store';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        </PersistGate>
    </Provider>
);

export default App;
