import React from 'react';

import { StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, List, ListItem, InputGroup } from 'native-base';

import firebase from 'firebase';

import styles from './css/styles';

export default class ClothesDetails extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      posts: [],
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
    }
  }
  componentDidMount = () =>{
    let dbRef = firebase.database().ref('/posts/');
    dbRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let posts = snapshot.val();
      let newState = [];
       // console.log(posts);
      for (let post in posts) {
        newState.push({
          image: posts[post].image,
          description: posts[post].description,
          store: posts[post].store,
          size: posts[post].size,
          designer: posts[post].designer,
          price: posts[post].price,
          color: posts[post].color,
          name: posts[post].name,
          material: posts[post].material,
          country: posts[post].country,
          laundry: posts[post].laundry,
          season : posts[post].season,
          style: posts[post].style,
          subStyle: posts[post].subStyle,
          friend: posts[post].friend
        });
      }
      // console.log(newState);
      this.setState({
        posts: newState
      });
    })
  }
  render(){
    console.log(this.props)
    console.log(this.props.navigation.state.params.image)
    return(
      <View style={styles.container}>
        <Container>
          <Content>
            {this.state.posts.map((post) => {
              <List>
                  <Text>Clothes Detail Page</Text>
                  <ListItem>
                    <Image source={{uri: post.image}} style={{flexDirection:'row', alignSelf: 'stretch', resizeMode: 'cover', height: 200, width: null, flex: 1}}/>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>{post.description}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Store</Text>
                      <Text>{post.store}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Size</Text>
                      <Text>{post.size}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Designer</Text>
                      <Text>{post.designer}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Price</Text>
                      <Text>{post.price}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Color</Text>
                      <Text>{post.color}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Name</Text>
                      <Text>{post.name}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Material</Text>
                      <Text>{post.material}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Country</Text>
                      <Text>{post.country}</Text>
                    </InputGroup>
                  </ListItem>
                  <ListItem>
                    <InputGroup>
                      <Text>Borrowing</Text>
                      <Text>{post.friend}</Text>
                    </InputGroup>
                  </ListItem>
              </List>
            })}
          </Content>
        </Container>
      </View>
    );
  }
};
