import React from 'react';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CameraRoll, Platform, StyleSheet, Text, View, TouchableOpacity, ListView, ActivityIndicator, Button } from 'react-native';

import PropTypes from 'prop-types';

import styles from './css/styles';

export default class RollScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num:0
    }
  }
  myImages(images){
    this.setState({
      num: images.length
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>{this.state.num} Images Selected</Text>
        <Button onPress={() => this.props.navigation.navigate("Add")} title="Go to Add" />
        <CameraRollPicker callback={this.myImages.bind(this)} />
      </View>
    );
  }
};

CameraRollPicker.propTypes = {
  scrollRenderAheadDistance: PropTypes.number,
  initialListSize: PropTypes.number,
  pageSize: PropTypes.number,
  removeClippedSubviews: PropTypes.bool,
  groupTypes: PropTypes.oneOf([
    'Album',
    'All',
    'Event',
    'Faces',
    'Library',
    'PhotoStream',
    'SavedPhotos',
  ]),
  maximum: PropTypes.number,
  assetType: PropTypes.oneOf([
    'Photos',
    'Videos',
    'All',
  ]),
  selectSingleItem: PropTypes.bool,
  imagesPerRow: PropTypes.number,
  imageMargin: PropTypes.number,
  containerWidth: PropTypes.number,
  callback: PropTypes.func,
  selected: PropTypes.array,
  selectedMarker: PropTypes.element,
  backgroundColor: PropTypes.string,
  emptyText: PropTypes.string,
  emptyTextStyle: Text.propTypes.style,
  loader: PropTypes.node,
}

CameraRollPicker.defaultProps = {
  scrollRenderAheadDistance: 500,
  initialListSize: 1,
  pageSize: 3,
  removeClippedSubviews: true,
  groupTypes: 'SavedPhotos',
  maximum: 15,
  imagesPerRow: 3,
  imageMargin: 5,
  selectSingleItem: false,
  assetType: 'Photos',
  backgroundColor: 'white',
  selected: [],
  callback: function(selectedImages, currentImage) {
    console.log(currentImage);
    console.log(selectedImages);
  },
  emptyText: 'No photos.',
}
