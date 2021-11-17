/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import './app/mocks/mock';
import axios from './app/axios';

import { store } from './app/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  console.log("Hello")

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then(res => { console.log( res.data.results[0].email)}).catch((err)=> console.log("err"))
    },[]);


  return (
    // <Provider store={store}>
      <View style = {styles.body}>
        <Text style = {styles.text}>
          Hello World!
        </Text>
      </View>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  body : {
    flex : 1,
    alignItems : 'center',
    alignContent : 'center'
  },
  text : {
    fontSize : 20,
    fontStyle : 'italic',
    margin : 50,
  }
});

export default App;
