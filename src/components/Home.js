import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ff00ff'
  }
})
