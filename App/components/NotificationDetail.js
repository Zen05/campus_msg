import React,{Component} from 'react';
import { Text, View, ScrollView, ToastAndroid } from 'react-native';
import Global from '../utility/global'

export default class NotificationDetail extends Component{
  constructor(){
    super()
    this.state={
      aid:1,
      pagesize:5,
      pageCount:0,
      pno:1,
      data:[],
      notification:{},
      isGetComment:false
    }
  }

  componentDidMount=()=>{
    var id=this.props.navigation.getParam('aid');
    // id = this.props.navigation.getParam('Aid');
    console.log(id);
    this.setState(()=>({aid:id}));
    //请求文章
    var url = Global.baseUrl + ':' + Global.port + '/article/detail?aid='+id//后端程序未写完
    // console.log(url)
    fetch(url).then(res=>res.json()).then(res=>{
      // console.log(res);
      this.setState({
        notification:res
      })
      console.log('NotificationDetail line24 status:',this.state.notification)
    })
    //请求评论
    url = `${Global.baseUrl}:${Global.port}/article/getCommont?aid=${this.state.aid}&pno=${this.state.pno}&pagesize=${this.state.pagesize}`
    console.log('ndetail 36: ',url)
    fetch(url).then(res => res.json()).then(result =>{
      console.log(result)
      if(result.code == 200){
        this.setState((prevState)=>{
          const {data} = result.data;
          console.log('nDetail line 51 data:',data);
          return {
            pno:prevState.pno+1,
            pageCount:4
          }
        })
      }else{
        ToastAndroid.show('网络开小差了，请稍后再试！',ToastAndroid.SHORT);
      }
    })
    
  }
  componentWillUnmount=()=>{
    this.setState({
      notification:null
    })
  }
  handlerPress=(aid)=>{
    //跳转到详情页面，并将参数传递过去
    console.log('NotificationDetail line 35 cid:',aid)
    this.props.navigation.navigate('Commont',{aid})
  }

  //渲染留言
  getCommont=()=>{
    return (
      <View style={{flex:1,marginTop:30,backgroundColor:'#f2f2f2',
        borderTopColor:'#f2f2f2',borderTopWidth:1}}>
        <Text style={{textAlign:'center',color:'#5e7192',height:50,fontSize:16,marginTop:20,justifyContent:'center'}} 
          onPress={()=>this.handlerPress(this.state.notification.aid)}>写留言</Text>
      </View>
    )
  }
  render() {
    return (
      <ScrollView style={{}}>
        {/* 文章区域 */}
        <View style={{}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.notification.title}</Text>
          <Text style={{fontSize:16,marginTop:20}}>{this.state.notification.content}fffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end',marginTop:20}}>{this.state.notification.Organization}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer1}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{this.state.notification.issuer2}</Text>
          <Text style={{fontSize:16,alignSelf:'flex-end'}}>{Global.timefilter(this.state.notification.issue_data)}</Text>
          <Text style={{fontSize:12,alignSelf:'flex-start',color:'#adadad',marginLeft:20}}>阅读量 {this.state.notification.rcount}</Text>
        </View>

        {/* 留言 */}
        {
          this.getCommont()
        }
      </ScrollView>
    );
  }
}
