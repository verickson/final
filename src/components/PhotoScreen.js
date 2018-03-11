import React from 'react';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CameraRoll, Platform, StyleSheet, Text, View, TouchableHighlight, ListView, ActivityIndicator, Button, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './css/styles';
// import ImageItem from './ImageItem';

export default class RollScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      // images: [],
      selected: [],
      // lastCursor: null,
      // initialLoading: true,
      // loadingMore: false,
      // noMore: false,
      // dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }
  myImages(images){
    let selectedImg = [...images];
    this.setState({
      num: images.length,
      selected: selectedImg
    });
  }
  //
  // componentWillMount() {
  //   this.fetch();
  // }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     selected: nextProps.selected,
  //   });
  // }
  // fetch() {
  //   if (this.state.initialLoading) {
  //     this.setState({initialLoading: false});
  //   }
  //   if (!this.state.loadingMore) {
  //     this.setState({loadingMore: true}, () => { this._fetch(); });
  //   }
  // }
  // _fetch() {
  //   var {groupTypes, assetType} = this.props;
  //   var fetchParams = {
  //     first: 1000,
  //     groupTypes: groupTypes,
  //     assetType: assetType,
  //   };
  //   if (Platform.OS === "android") {
  //     // not supported in android
  //     delete fetchParams.groupTypes;
  //   }
  //   if (this.state.lastCursor) {
  //     fetchParams.after = this.state.lastCursor;
  //   }
  //   CameraRoll.getPhotos(fetchParams)
  //     .then((data) => this._appendImages(data), (e) => console.log(e));
  // }
  // _appendImages(data) {
  //   var assets = data.edges;
  //   var newState = {
  //     loadingMore: false,
  //     initialLoading: false,
  //   };
  //   if (!data.page_info.has_next_page) {
  //     newState.noMore = true;
  //   }
  //   if (assets.length > 0) {
  //     newState.lastCursor = data.page_info.end_cursor;
  //     newState.images = this.state.images.concat(assets);
  //     newState.dataSource = this.state.dataSource.cloneWithRows(
  //       this._nEveryRow(newState.images, 3)
  //     );
  //   }
  //   this.setState(newState);
  // }



  render(){
    // var {dataSource} = this.state;
    // var {
    //   scrollRenderAheadDistance,
    //   initialListSize,
    //   pageSize,
    //   removeClippedSubviews,
    //   imageMargin,
    //   backgroundColor,
    //   emptyText,
    //   emptyTextStyle,
    //   loader,
    // } = this.props;
    // if (this.state.initialLoading) {
    //   return (
    //     <View style={[styles.loader, {backgroundColor}]}>
    //       { loader || <ActivityIndicator /> }
    //     </View>
    //   );
    // }
    //
    // var listViewOrEmptyText = dataSource.getRowCount() > 0 ? (
    //   <ListView
    //     style={{flex: 1,}}
    //     scrollRenderAheadDistance={scrollRenderAheadDistance}
    //     initialListSize={initialListSize}
    //     pageSize={pageSize}
    //     removeClippedSubviews={removeClippedSubviews}
    //     renderFooter={this._renderFooterSpinner.bind(this)}
    //     onEndReached={this._onEndReached.bind(this)}
    //     dataSource={dataSource}
    //     renderRow={rowData => this._renderRow(rowData)} />
    // ) : (
    //   <Text style={[{textAlign: 'center'}, emptyTextStyle]}>{emptyText}</Text>
    // );

//     var test  = <FlatList
//   data={this.state.images}
//   renderItem={({item}) => <Text>{item.key}</Text>}
// />
    // var test  = <ListView
    //     dataSource={dataSource}
    //     renderRow={(rowData) => this._renderRow(rowData)}
    //   />

// console.log(test);

    // {listViewOrEmptyText}
    var marker = <Image
      style={[styles.marker, { width: 25, height: 25 }]}
      source={require('../images/circle-check.png')}
    />;

    return(
      <View style={styles.container}>
        <Text>{this.state.num} Images Selected</Text>
        <CameraRollPicker callback={this.myImages.bind(this)} selectedMarker={marker} />
      </View>
    );
  }

  // _renderImage(item) {
  //   var {selected} = this.state;
  //   var {
  //     imageMargin,
  //     selectedMarker,
  //     imagesPerRow,
  //     containerWidth
  //   } = this.props;
  //   var uri = item.node.image.uri;
  //   var isSelected = false;
  //   if(selected){
  //     isSelected = (this._arrayObjectIndexOf(selected, 'uri', uri) >= 0) ? true : false;
  //   }
  //   return (
  //     <ImageItem
  //     key={uri}
  //     item={item}
  //     selected={isSelected}
  //     imageMargin={imageMargin}
  //     selectedMarker={selectedMarker}
  //     imagesPerRow={imagesPerRow}
  //     containerWidth={containerWidth}
  //     onClick={this._selectImage.bind(this)}
  //     />
  //   );
  // }
  // _renderRow(rowData) {
  //   if(!rowData){
  //     return null;
  //   }
  //   var items = rowData.map((item) => {
  //     if (item === null) {
  //       return null;
  //     }
  //     return this._renderImage(item);
  //   });
  //   return (
  //     <View style={styles.row}>
  //     {items}
  //     </View>
  //   );
  // }
  // _renderFooterSpinner() {
  //   if (!this.state.noMore) {
  //     return <ActivityIndicator style={styles.spinner} />;
  //   }
  //   return null;
  // }
  // _onEndReached() {
  //   if (!this.state.noMore) {
  //     this.fetch();
  //   }
  // }
  // _selectImage(image) {
  //   var {maximum, imagesPerRow, callback, selectSingleItem} = this.props;
  //
  //   var selected = this.state.selected
  //   var index = -1;
  //   if(selected){
  //     index = this._arrayObjectIndexOf(selected, 'uri', image.uri);
  //   }
  //
  //   if (index >= 0) {
  //     selected.splice(index, 1);
  //   } else {
  //     if (selectSingleItem) {
  //       selected.splice(0,selected.length);
  //     }
  //     if (selected.length < maximum) {
  //       selected.push(image);
  //     }
  //   }
  //   this.setState({
  //     selected: selected,
  //     dataSource: this.state.dataSource.cloneWithRows(
  //       this._nEveryRow(this.state.images, 3)
  //     ),
  //   });
  //   callback(selected, image);
  // }
  // _nEveryRow(data, n) {
  //   var result = [],
  //   temp = [];
  //   for (var i = 0; i < data.length; ++i) {
  //     if (i > 0 && i % n === 0) {
  //       result.push(temp);
  //       temp = [];
  //     }
  //     temp.push(data[i]);
  //   }
  //   if (temp.length > 0) {
  //     while (temp.length !== n) {
  //       temp.push(null);
  //     }
  //     result.push(temp);
  //   }
  //   return result;
  // }
  // _arrayObjectIndexOf(array, property, value) {
  //   if(!array){
  //     return null;
  //   }
  //   return array.map((o) => { return o[property]; }).indexOf(value);
  // }
};



//
// CameraRollPicker.propTypes = {
//   scrollRenderAheadDistance: PropTypes.number,
//   initialListSize: PropTypes.number,
//   pageSize: PropTypes.number,
//   removeClippedSubviews: PropTypes.bool,
//   groupTypes: PropTypes.oneOf([
//     'Album',
//     'All',
//     'Event',
//     'Faces',
//     'Library',
//     'PhotoStream',
//     'SavedPhotos',
//   ]),
//   maximum: PropTypes.number,
//   assetType: PropTypes.oneOf([
//     'Photos',
//     'Videos',
//     'All',
//   ]),
//   selectSingleItem: PropTypes.bool,
//   imagesPerRow: PropTypes.number,
//   imageMargin: PropTypes.number,
//   containerWidth: PropTypes.number,
//   callback: PropTypes.func,
//   selected: PropTypes.array,
//   selectedMarker: PropTypes.element,
//   backgroundColor: PropTypes.string,
//   emptyText: PropTypes.string,
//   emptyTextStyle: Text.propTypes.style,
//   loader: PropTypes.node,
// }
//
// CameraRollPicker.defaultProps = {
//   scrollRenderAheadDistance: 500,
//   initialListSize: 1,
//   pageSize: 3,
//   removeClippedSubviews: true,
//   groupTypes: 'SavedPhotos',
//   maximum: 15,
//   imagesPerRow: 3,
//   imageMargin: 5,
//   selectSingleItem: false,
//   assetType: 'Photos',
//   backgroundColor: 'white',
//   selected: [],
//   callback: function(selectedImages, currentImage) {
//     console.log(currentImage);
//     console.log(selectedImages);
//   },
//   emptyText: 'No photos.',
// }
