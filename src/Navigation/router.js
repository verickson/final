import React from 'react';
import { TabNavigator, StackNavigator  } from 'react-navigation';
import { Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../components/Home';
import DetailScreen from '../components/ClothesDetails';
import PhotoScreen from '../components/PhotoScreen';
import AddScreen from '../components/AddClothesDetails';

//photo navigation
export const PhotoStack = StackNavigator({
  Photo:{
    screen: PhotoScreen,
    navigationOptions: (props) => ({
      title: "Images Selected",
      headerRight: <Button color="#fff" title="Next" onPress={ () => { props.navigation.navigate('Add') }} />,
      headerLeft: <Button color="#fff" title="Cancel" onPress={ () => { props.navigation.navigate('Home') }} />,
    }),
  },
  Add: {
    screen: AddScreen,
    navigationOptions: (props) => ({
      title: "Add",
      headerRight: <Button color="#fff" title="Save" onPress={ () => { props.navigation.navigate('Home') }} />,
    })
  }
},
{
  navigationOptions:{
    headerStyle: {
      backgroundColor: '#5314E9',
    },
    headerTintColor: '#fff',
  }
});

export const PhotoTab = TabNavigator({
  Library:{
    screen: PhotoStack,
    navigationOptions: (props) => ({
      title: "Photos",
    })
  }
  // ,
  // Photo:{
  //
  // }
},
{
  mode: 'modal',
  headerMode: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: false,
    activeTintColor: '#000000',
    inactiveTintColor: '#9B9B9B',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

//top bars that go with the pages with bottom bars
export const FeedStack = StackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: (props) => ({
      title: "MyCloset",
    }),
  },
  Details:{
    screen: DetailScreen,
    navigationOptions: (props) => ({
      title: "Detail",
    }),
  }
},
{
  navigationOptions:{
    headerStyle: {
      backgroundColor: '#5314E9',
    },
    headerTintColor: '#fff',
  }
});

//bottom tabs
export const Tabs = TabNavigator({
  Home: {
      screen: FeedStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name={"home"} size={25} color={tintColor} />
      }
  },
  Photo: {
      screen: PhotoTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name={"camera"} size={25} color={tintColor} />
      }
  }
},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#5314E9',
    inactiveTintColor: '#9B9B9B',
    showLabel: false
  }
}
);
