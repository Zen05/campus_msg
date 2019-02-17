import React,{Component} from 'react';
import { Text, View } from 'react-native';

export default class NotificationDetail extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{fontWeight:'bold',fontSize:20}}>主标题</Text>
        <Text style={{fontSize:16}}>文本内容</Text>
        <Text style={{fontSize:16}}>发文机构</Text>
        <Text style={{fontSize:16}}>2019/2/17</Text>
      </View>
    );
  }
}
