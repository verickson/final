import React from 'react';

import { StyleSheet, Text, View} from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, List, ListItem, InputGroup } from 'native-base';

import firebase from 'firebase';

import styles from './css/styles';

export default class ClothesDetails extends React.Component{
  constructor(props){
    super(props);
let dbRef = firebase.database().ref('/posts/post' + Math.floor(Math.random() * Math.floor(999999)));
    // dbRef.on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // }
    // firebase.database().ref('posts').set({
    //   description: description,
    //   store: store,
    //   size: size,
    //   designer: designer,
    //   price: price,
    //   color: color,
    //   name: name,
    //   material: material,
    //   country: country,
    //   laundry: laundry,
    //   season : season,
    //   style: style,
    //   subStyle: subStyle,
    //   friend: friend
    // });
  }
  render(){
    return(
      <View style={styles.container}>
        <Container>
          <Content>
            <List>
              <Text>Clothes Detail Page</Text>
              <ListItem>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>{this.state.description}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Store</Text>
                  <Text>{this.state.store}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Size</Text>
                  <Text>{this.state.size}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Designer</Text>
                  <Text>{this.state.designer}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Price</Text>
                  <Text>{this.state.price}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Color</Text>
                  <Text>{this.state.color}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Name</Text>
                  <Text>{this.state.name}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Material</Text>
                  <Text>{this.state.material}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Country</Text>
                  <Text>{this.state.country}</Text>
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Text>Borrowing</Text>
                  <Text>{this.state.friend}</Text>
                </InputGroup>
              </ListItem>
            </List>
          </Content>
        </Container>
      </View>
    );
  }
};
