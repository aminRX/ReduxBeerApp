/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import welcome from './app/components/welcome';
const store = createStore(reducer);
class reduxbeerapp extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );

  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('reduxbeerapp', () => reduxbeerapp);
