
import React from 'react';
import {View,} from 'react-native';
import ScreenRouter from './src/Route/ScreenRouter';
import {Provider} from 'react-redux';
import store from './src/redux';
const App = () => {
  return (

   <Provider store={store}>

      <ScreenRouter />
      </Provider>

  );
};



export default App;
