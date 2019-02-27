import React,{Component} from 'react';
import { Text, View, ScrollView } from 'react-native';
import Global from '../utility/global'

export default class NotificationDetail extends Component{
  constructor(){
    super()
    this.state={
      notification:{}
    }
  }
  componentDidMount=()=>{
    var id=1;
    // id = this.props.navigation.getParam('Aid');
    console.log(id);
    url = Global.baseUrl + ':' + Global.port + '/article/detail?aid='+id//后端程序未写完
    // console.log(url)
    fetch(url).then(res=>res.json()).then(res=>{
      // console.log(res);
      this.setState({
        notification:res
      })
      
      // console.log('status:',this.state.notification)
    })

  }
  render() {
    return (
      <ScrollView >
        <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.notification.title}</Text>
        <Text style={{fontSize:16}}>{this.state.notification.content}</Text>
        <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.Organization}</Text>
        <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer1}</Text>
        <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer2}</Text>
        <Text style={{fontSize:16,alignSelf:'flex-end'}}>{Global.timefilter(this.state.notification.issue_data)}</Text>
      </ScrollView>
    );
  }
}
