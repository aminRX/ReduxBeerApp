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
const SearchPage = require('./app/components/SearchPage');
class reduxbeerapp extends Component {
  render() {
    return (
      <React.NavigatorIOS style={styles.container}
                          initialRoute={{
                            title: 'Beers',
                            component: SearchPage
                          }}
                          />
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
