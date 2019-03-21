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
    var id=this.props.navigation.getParam('aid');
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
  componentWillUnmount=()=>{
    this.setState({
      notification:null
    })
  }

  render() {
    return (
      <ScrollView >
        {/* 文章区域 */}
        <View>
          <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.notification.title}</Text>
          <Text style={{fontSize:16}}>{this.state.notification.content}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.Organization}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer1}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer2}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{Global.timefilter(this.state.notification.issue_data)}</Text>
          <Text style={{fontSize:12,alignSelf:'flex-start',color:'gray',marginTop:50,marginLeft:20}}>阅读量 20</Text>
        </View>

        {/* 留言 */}
        <View>

        </View>
      </ScrollView>
    );
  }
}
