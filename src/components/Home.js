import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import styles from './css/styles';

export default class Home extends React.Component{
  handlePress =()=>{

  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress={() => this.props.navigation.navigate("Details")} title="Go to Detail" />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>...</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
