import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker, Image, Button } from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, List, ListItem, InputGroup } from 'native-base';
import styles from './css/styles';

import firebase from 'firebase';

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
      friend: '',
      image: ''
    };
  }
  saveData = () => {
    let dbRef = firebase.database().ref('/posts/post' + Math.floor(Math.random() * Math.floor(999999)));
    // dbRef.on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // }
    dbRef.set(
      {
        description: this.state.description,
        store: this.state.store,
        size: this.state.size,
        designer: this.state.designer,
        price: this.state.price,
        color: this.state.color,
        name: this.state.name,
        material: this.state.material,
        country: this.state.country,
        laundry: this.state.laundry,
        season : this.state.season,
        style: this.state.style,
        subStyle: this.state.subStyle,
        friend: this.state.friend,
        image: this.props.navigation.state.params.image[0]['uri']
      }
    )
    this.props.navigation.navigate('Home');
  }
  render(){
    // console.log(this.props)
    // console.log(this.props.navigation.state.params.image[0]['uri'])
    return(
      <View style={styles.container}>
        <Container>
          <Content>
            <List>
              <ListItem>
                <Image source={{uri: this.props.navigation.state.params.image[0]['uri']}} style={{height: 200, width: null, flex: 1}}/>
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

              <Button title="add" onPress={this.saveData} />
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
