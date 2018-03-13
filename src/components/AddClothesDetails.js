import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Image } from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, List, ListItem, InputGroup } from 'native-base';
import styles from './css/styles';

// import firebase from 'firebase';
// import RNFetchBlob from 'react-native-fetch-blob';

// const Blog = RNFetchBlob.polyfill.Blob;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;

export default class AddClothesDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      store: '',
      size: '',
      designer: '',
      price: '',
      color: '',
      name: '',
      material: '',
      country: '',
      laundry: '',
      season : '',
      style: '',
      subStyle: '',
      friend: ''
    };
  }
  inlinePresent() {
   var inlineComponentPresent = false;
   if (this.inputPresent()) {
       if (this.props.children.props.children.props && this.props.children.props.children.props.inlineLabel) {
           inlineComponentPresent = true;
       }
       else
           inlineComponentPresent = false;
   }
   return inlineComponentPresent;
 }
  render(){
    return(
      <View style={styles.container}>
        <Container>
          <Content>
            <List>
              <ListItem>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Input
                    placeholder="Write Description"
                    onChangeText={(typedText) => {this.setState({description: typedText});}}
                    value={this.state.description}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Store</Label>
                  <Input
                    placeholder="Place of purchase"
                    onChangeText={(typedText) => {this.setState({store: typedText});}}
                    value={this.state.store}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Size</Label>
                  <Input
                    placeholder="Size"
                    onChangeText={(typedText) => {this.setState({size: typedText});}}
                    value={this.state.size}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Designer</Label>
                  <Input
                    placeholder="Designer Name"
                    onChangeText={(typedText) => {this.setState({designer: typedText});}}
                    value={this.state.designer}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Price</Label>
                  <Input
                    placeholder="$000.00"
                    onChangeText={(typedText) => {this.setState({price: typedText});}}
                    value={this.state.price}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Color</Label>
                  <Input
                    placeholder="blue"
                    onChangeText={(typedText) => {this.setState({color: typedText});}}
                    value={this.state.color}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Name</Label>
                  <Input
                    placeholder="Name of item"
                    onChangeText={(typedText) => {this.setState({name: typedText});}}
                    value={this.state.name}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Material</Label>
                  <Input
                    placeholder="Acrylic/cotton/wool"
                    onChangeText={(typedText) => {this.setState({material: typedText});}}
                    value={this.state.material}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Country</Label>
                  <Input
                    placeholder="imported"
                    onChangeText={(typedText) => {this.setState({country: typedText});}}
                    value={this.state.country}
                  />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Label>Borrowing</Label>
                  <Input
                    placeholder="Name"
                    onChangeText={(typedText) => {this.setState({friend: typedText});}}
                    value={this.state.friend}
                  />
                </InputGroup>
              </ListItem>
            </List>
          </Content>
        </Container>
      </View>
    );
  }
};

//
// <Text>Wash</Text>
// <Picker
//   style={{width:'80%'}}
//   selectedValue={this.state.laundry}
//   onValueChange={(itemValue, itemIndex) => this.setState({laundry:itemValue})}>
//   <Picker.Item label="Machine Wash" value="MachineWash" />
//   <Picker.Item label="Machine Wash Cold" value="MachineWashCold" />
//   <Picker.Item label="Machine Wash Warm" value="MachineWashWarm" />
//   <Picker.Item label="Machine Wash Hot" value="MachineWashHot" />
//   <Picker.Item label="Dry Clean" value="DryClean" />
//   <Picker.Item label="Gentle Cycle" value="GentleCycle" />
//   <Picker.Item label="Permanent Press" value="PermanentPress" />
//   <Picker.Item label="Hand Wash" value="HandWash" />
//   <Picker.Item label="Cotton Wash" value="CottonWash" />
//   <Picker.Item label="Synthetics Wash" value="SyntheticsWash" />
//   <Picker.Item label="Wool Wash" value="WoolWash" />
//   <Picker.Item label="Do Not Wash" value="NoWash" />
// </Picker>
// <Text>Season</Text>
// <Picker
//   style={{width:'80%'}}
//   selectedValue={this.state.season}
//   onValueChange={(itemValue, itemIndex) => this.setState({season:itemValue})}>
//   <Picker.Item label="Spring/Summer" value="SpringSummer" />
//   <Picker.Item label="Resort" value="Resort" />
//   <Picker.Item label="Pre-Fall" value="PreFall" />
//   <Picker.Item label="Fall/Winter" value="FallWinter" />
// </Picker>
//
// <Text>Style</Text>
// <Picker
//   style={{width:'80%'}}
//   selectedValue={this.state.style}
//   onValueChange={(itemValue, itemIndex) => this.setState({style:itemValue})}>
//   <Picker.Item label="Top" value="Top" />
// </Picker>
// <Text>Sub Style</Text>
// <Picker
//   style={{width:'80%'}}
//   selectedValue={this.state.subStyle}
//   onValueChange={(itemValue, itemIndex) => this.setState({subStyle:itemValue})}>
//   <Picker.Item label="shortsleeve" value="shortsleeve" />
// </Picker>
