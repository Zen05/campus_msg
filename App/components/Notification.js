import React,{Component} from 'react';
import { View } from 'react-native';
import global from '../utility/global';
import MsgView from './MsgView'

export default class Notification extends Component{
  componentDidMount=()=>{
    console.log('notification==line8:',global.baseUrl+':'+global.port+'/img/1.jpg')
  }
  render() {
    return (
      
        <MsgView></MsgView>
      
    );
  }
}