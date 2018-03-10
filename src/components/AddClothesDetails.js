import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import styles from './css/styles';

export default class AddClothesDetails extends React.Component{
  static navigationOptions = {
    //title: 'Welcome to the app!',
  };
  render(){
    return(
      <View style={styles.container}>
        <Text>Clothes Detail Page</Text>
      </View>
    );
  }
};
