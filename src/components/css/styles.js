import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ff00ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 50,
    width: 50,
  },
  texttop:{
    paddingTop:20,
  },
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
});

export default styles;
