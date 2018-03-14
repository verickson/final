import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Body } from 'native-base';

import styles from './css/styles';

import firebase from 'firebase';
import APIKeys from '../constants/APIKeys';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    firebase.initializeApp(APIKeys.firebaseconfig);
    this.state ={
      posts: [],
      image: '',
      description: ''
    }
  }
  componentDidMount = () =>{
    let dbRef = firebase.database().ref('/posts');
    dbRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
      let posts = snapshot.val();
      let newState = [];
       // console.log(posts);
      for (let post in posts) {
        newState.push({
          image: posts[post].image,
          description: posts[post].description
        });
      }
      // console.log(newState);
      this.setState({
        posts: newState
      });
    })
  }
  // handlePress =(props)=>{
  //   this.props.navigation.navigate("Details", {image: this.props.navigation.state.params.image})
  // }
  render(){
     // console.log(this.props)
    return(
      <View style={styles.container}>
          <Content>
            {this.state.posts.map((post) => {
              if (post.image === '') {
              }
              else{
                return (
                  <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Details', {image: post.image})} key={post.image}>
                    <Card style={{flexWrap: 'nowrap'}}>
                      <CardItem cardBody>
                        <Image source={{uri: post.image}} style={{flexDirection:'row', alignSelf: 'stretch', resizeMode: 'cover', height: 200, width: null, flex: 1}}/>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                )
              }
            })}
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

// <Card>
//   <CardItem>
//     <Body>
//       <TouchableOpacity onPress={this.handlePress}>
//         <Text>Go to details</Text>
//       </TouchableOpacity>
//     </Body>
//   </CardItem>
// </Card>
