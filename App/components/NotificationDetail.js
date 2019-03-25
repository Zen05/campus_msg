import React,{Component} from 'react';
import { Text, View, ScrollView, ToastAndroid, Image,FlatList } from 'react-native';
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
          return {
            pno:prevState.pno+1,
            pageCount:4,
            data:data
          }
        })
      }else{
        ToastAndroid.show('网络开小差了，请稍后再试！',ToastAndroid.SHORT);
      }
    })
    
  }
  componentWillUnmount=()=>{
    var rcount = parseInt(this.state.notification.rcount) + 1;
    var url = `${Global.baseUrl}:${Global.port}/article/changeRcount?aid=${this.state.aid}&rcount=${rcount}`
    fetch(url).then(res=>res.json()).then();
    this.setState({
      aid:null,
      pagesize:null,
      pageCount:null,
      pno:null,
      data:null,
      notification:null,
      isGetComment:false
    })
  }
  handlerPress=(aid)=>{
    //跳转到详情页面，并将参数传递过去
    console.log('NotificationDetail line 35 cid:',aid)
    this.props.navigation.navigate('Commont',{aid})
  }

  showItem=(info)=>{
    console.log("showItem has been called")
    return (<View style={{flexDirection:'row',marginTop:10}}>
    {/* 用户头像 */}
    <Image 
        style={{width:40,height:40,marginLeft:15}} 
        source={require("../imgs/1.jpg")}
        flex={1}></Image>
    {/* 评论内容 */}
    <View style={{marginLeft:8,marginRight:15}} flex={7}>
      {/* 用户名和赞 */}
      <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{}}>{info.Item.user_name}</Text>
        <View style={{flexDirection:'row'}}>
          <Image 
            source={require('../imgs/zan.png')}
            style={{height:16,width:16}}></Image>
          <Text>赞</Text>
        </View>
      </View>
      {/* 评论内容 */}
      <View>
        <Text>{info.Item.content}</Text>
      </View>
    </View>
  </View>)
  }

  //渲染留言
  getCommont=()=>{
    
    console.log(this.state)
    if(this.state.data){
      console.log(this.state.data)
      return (
      <View style={{backgroundColor:'#f2f2f2',
        borderTopColor:'#f2f2f2',borderTopWidth:1,paddingBottom:30}}>
      {/* 留言区头部 */}
        <View style={{ flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
          <Text style={{marginLeft:15,fontSize:16}}>评论区</Text> 
          <Text 
            style={{marginRight:15,color:'#5e7192',fontSize:16}}
            onPress={()=>this.handlerPress(this.state.notification.aid)}>
            留言
          </Text>
        </View>
      {/* 留言区 */}
      {
        this.state.data.map((value,index)=>{
          // console.log("this is value---------------",value)
          return (<View style={{flexDirection:'row',marginTop:10,marginBottom:20}} key={index}>
            {/* 用户头像 */}
            <Image 
                style={{width:40,height:40,marginLeft:15}} 
                source={require("../imgs/1.jpg")}
                flex={1}></Image>
            {/* 评论内容 */}
            <View style={{marginLeft:8,marginRight:15}} flex={7}>
              {/*/* 用户名和赞 */}
              <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{}}>{value.user_name}</Text>
                <View style={{flexDirection:'row'}}>
                  <Image 
                    source={require('../imgs/zan.png')}
                    style={{height:16,width:16}}></Image>
                  <Text>赞</Text>
                </View>
              </View>
              {/*/ 评论内容 */}
              <View>
                <Text>{value.content}</Text>
              </View>
            </View>
          </View>)
        })
      }
      {/* <FlatList 
       data={this.state.data} 
       extraData={this.state}
       renderItem={this.showItem}>
                 
              </FlatList> */}
      </View>);
    }else{
      return (
        <View style={{flex:1,marginTop:30,backgroundColor:'#f2f2f2',
          borderTopColor:'#f2f2f2',borderTopWidth:1}}>
          <Text style={{textAlign:'center',color:'#5e7192',height:50,fontSize:16,marginTop:10,justifyContent:'center'}} 
            onPress={()=>this.handlerPress(this.state.notification.aid)}>写留言</Text>
        </View>
      )
    }
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
