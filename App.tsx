/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from '@redux/store';

import EspotifaiApp from '@navigations/stacks/flowAuthNavigation';
import StatusBar from '@components/StatusBar';


const App = () => {


  return (
    <Provider store={ store }>
      <StatusBar />
      <EspotifaiApp />
    </Provider>
  );
};

export default App;
