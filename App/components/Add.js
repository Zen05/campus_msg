import React,{Component} from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './HomeScreen';

export default class Add extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add!</Text>
        <HomeScreen></HomeScreen>
      </View>
    );
  }
}
