import React from 'react';

import { StyleSheet, View, Image} from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, List, ListItem, InputGroup, Left, Body, Text } from 'native-base';

import firebase from 'firebase';

import styles from './css/styles';

export default class ClothesDetails extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      posts: []
    }
  }
  componentDidMount = () =>{
    // console.log(this.props.navigation.state.params.key)
    const postkey = this.props.navigation.state.params.key;
    let dbRef = firebase.database().ref('/posts/' + postkey);
    dbRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let posts = snapshot.val();
      let newState = [];
       // console.log(posts);
      // for (let post in posts) {
      //   // console.log(posts);
      //
      // }
      newState.push({
        image: posts.image,
        description: posts.description,
        store: posts.store,
        size: posts.size,
        designer: posts.designer,
        price: posts.price,
        color: posts.color,
        name: posts.name,
        material: posts.material,
        country: posts.country,
        laundry: posts.laundry,
        season : posts.season,
        style: posts.style,
        subStyle: posts.subStyle,
        friend: posts.friend
      });
      // console.log(newState);
      this.setState({
        posts: newState
      });
    })
  }
  render(){
    // console.log(this.props)
    // console.log(this.props.navigation.state.params.image)
    // console.log(this.state.posts)
    console.log(this.state.posts[0])
    // console.log(this.state.posts[0].description)
    // console.log(this.state.posts.description)
    return(
      <View style={styles.container}>
        <Container>
          <Content>
            {this.state.posts.map((object) => {
              return(
                <List key={this.props.navigation.state.params.key}>
                  <ListItem>
                    <Image source={{uri: object.image}} style={{flexDirection:'row', alignSelf: 'stretch', resizeMode: 'cover', height: 200, width: null, flex: 1}}/>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>{object.description}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Store</Text>
                      </Left>
                      <Body>
                        <Text>{object.store}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Size</Text>
                      </Left>
                      <Body>
                        <Text>{object.size}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Designer</Text>
                      </Left>
                      <Body>
                        <Text>{object.designer}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Price</Text>
                      </Left>
                      <Body>
                        <Text>{object.price}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Color</Text>
                      </Left>
                      <Body>
                        <Text>{object.color}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Name</Text>
                      </Left>
                      <Body>
                        <Text>{object.name}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Material</Text>
                      </Left>
                      <Body>
                        <Text>{object.material}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Country</Text>
                      </Left>
                      <Body>
                        <Text>{object.country}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Left>
                        <Text>Borrowing</Text>
                      </Left>
                      <Body>
                        <Text>{object.friend}</Text>
                      </Body>
                    </InputGroup>
                  </ListItem>
                </List>
              )
            })}
          </Content>
        </Container>
      </View>
    );
  }
};


//
//
//
//
//
//
