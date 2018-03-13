import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Body } from 'native-base';

import styles from './css/styles';

import firebase from 'firebase';
// import RNFetchBlob from 'react-native-fetch-blob';
const config = {
  apiKey: "AIzaSyAtRjXLIFn1EKsw36jP1wWntUuT_6e5DFo",
  databaseURL: "https://mycloset-001.firebaseio.com",
  storageBucket: "mycloset-001.appspot.com"
};
firebase.initializeApp(config);

// import store from './store';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }
  handlePress =(props)=>{
    this.props.navigation.navigate("Details")
  }
  render(){
    return(
      <View style={styles.container}>
          <Content>
            <Card>
              <CardItem>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                <Body>
                  <Text>Open up App.js to start working on your app!</Text>
                  <Text>Changes you make will automatically reload.</Text>
                  <Text>Shake your phone to open the developer menu.</Text>
                  <TouchableOpacity onPress={this.handlePress}>
                    <Text>Go to details</Text>
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Card>
          </Content>
      </View>
    );
  }
};

// <Card>
//   <CardItem cardBody>
//     {this.image ? <Image style={{height:200,width:null,flex:1}} source={this.image}/> : null}
//   </CardItem>
// </Card>
