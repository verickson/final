import React from 'react';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CameraRoll, Platform, StyleSheet, Text, View, TouchableHighlight, ListView, ActivityIndicator, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './css/styles';
// import ImageItem from './ImageItem';

// import firebase from 'firebase';
// import RNFetchBlob from 'react-native-fetch-blob';

export default class RollScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      selected: [],
    }
  }
  myImages(images){
    let selectedImg = [...images];
    this.setState({
      num: images.length,
      selected: selectedImg
    });
  }

  render(){
    console.log(this.state.selected)
        const { navigate } = this.props.navigation;
        (console.log(navigate))
    var marker = <Image
      style={[styles.marker, { width: 25, height: 25 }]}
      source={require('../images/circle-check.png')}
    />;
    return(
      <View style={styles.container}>
        <Button
          title="go to add"
          onPress={() =>
            this.props.navigation.navigate('Add', {image: this.state.selected})
          }
        />
        <CameraRollPicker callback={this.myImages.bind(this)} selectedMarker={marker} />
      </View>
    );
  }
};
// <Text>{this.state.num} Images Selected</Text>
