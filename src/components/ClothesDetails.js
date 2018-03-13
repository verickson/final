import React from 'react';

import { StyleSheet, Text, View, Card, CardItem } from 'react-native';
import styles from './css/styles';

export default class ClothesDetails extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Clothes Detail Page</Text>

            <Text>{this.state.description}</Text>
            <Text>Store</Text>
            <Text>{this.state.store}</Text>
            <Text>Size</Text>
            <Text>{this.state.size}</Text>
            <Text>Designer</Text>
            <Text>{this.state.designer}</Text>
            <Text>Price</Text>
            <Text>{this.state.price}</Text>
            <Text>Color</Text>
            <Text>{this.state.color}</Text>
            <Text>Name</Text>
            <Text>{this.state.name}</Text>
            <Text>Material</Text>
            <Text>{this.state.material}</Text>
            <Text>Country</Text>
            <Text>{this.state.country}</Text>
            <Text>Borrowing</Text>
            <Text>{this.state.friend}</Text>

      </View>
    );
  }
};

// <Card>
//
//   <CardItem>
// // <CardItem cardBody>
// //   {this.image ? <Image style={{height:200,width:null,flex:1}} source={this.image}/> : null}
// // </CardItem>
// </CardItem>
// </Card>
