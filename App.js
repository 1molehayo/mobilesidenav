/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {initStore} from './src/store/index';
import {Provider as StoreProvider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import Router from './src/routes/index';
import {StatusBar} from 'react-native';

const store = initStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <StatusBar barStyle="dark-content" />
      <Router />
      <FlashMessage position="bottom" duration={4000} />
    </StoreProvider>
  );
};

export default App;
