import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './router';
import { Provider } from 'react-redux';
import {store} from './redux';

const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
