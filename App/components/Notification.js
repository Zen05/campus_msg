import React,{Component} from 'react';
import global from '../utility/global';
import {ScrollView,RefreshControl,ToastAndroid ,TouchableOpacity,Image,View,Text} from 'react-native';
import style from '../stylesheet/style'

export default class Notification extends Component{
  constructor(){
    super();
    this.state={
      refreshing:false,
      recordCount:0,
      pageSize:3,
      pageCount:0,
      pno:1, 
      list:[]
    }
  }
  
   _scroll;

   componentDidMount=()=>{
    console.log('componentDidMount line22',this._scroll.scrollToEnd)
    setTimeout(()=>{
      this._scroll.scrollToEnd()
    },0)
      // this._scroll.scrollToEnd()
  }
  componentWillMount=()=>{  
    var url = `${global.baseUrl}:${global.port}/article/list2?pagesize=${this.state.pageSize}&pno=${this.state.pno}` 
    // console.log(url)
    fetch(url).then(
      res=>res.json()
      ).then(result=>{
          //  console.log(result);
       //对数据的返回结果进行处理
          if(result.code == 200 ){//成功时跳向指定的页面
             let resData = result.data;
            //  console.log('resData on Notication of first fetch line 28:',resData)
             this.setState({
              recordCount:resData.recordCount,
              pageSize:resData.pageSize,
              pageCount:resData.pageCount,
              pno:resData.pno+1, 
              list:resData.data.reverse()
             })
          }else{
            //提示用户网络连接错误
            // Pass;
            ToastAndroid.show('已经到头了哦！',ToastAndroid.SHORT);
          }
        //  console.log('Notification this.state line:39:',this.state)
      }
    )
/*     var url1 = `${global.baseUrl}:${global.port}/questionnaire/list`
    fetch(url1).then(res=>res.json()).then(result=>{
      this.setState((prevState)=>{
        var list = prevState.list;
        list = list.concat(result.data.data);
        console.log('this is list of concat',list)
        return{
          list
        }
      })
    }) */
  }

  componentWillUnmount=()=>{
    this.setState({
      recordCount:null,
      pageSize:null,
      pageCount:null,
      pno:null, 
      list:null
    })
  }

  handlerPress=(value)=>{
    //跳转到详情页面，并将参数传递过去
    if(value.aid) this.props.navigation.navigate('NotificationDetail',{aid:value.aid});
    else this.props.navigation.navigate('Questionnaire',{qid:value.qid})
  }

  _onRefresh = () => {
    var url = `${global.baseUrl}:${global.port}/article/list2?pagesize=${this.state.pageSize}&pno=${this.state.pno}` 
    //设置刷新状态为正在刷新
    this.setState({refreshing: true});
    //判断是否还有数据
   if(this.state.pno < this.state.pageCount){
    fetch(url).then(
      res=>res.json()//将json字符串转换为对象格式
    ).then(result=>{//对结果进行处理
      // console.log('onRefresh:',result);
      if(result.code == 200){//如果数据状态为200表示返回数据成功
        let resData = result.data;
        this.setState({//改变状态机的值
          recordCount:resData.recordCount,
          pageSize:resData.pageSize,
          pageCount:resData.pageCount,
          pno:resData.pno+1, 
          list:resData.data.reverse().concat(this.state.list)
         })
      }else{//给出错误提示
          ToastAndroid.show('网络连接错误，请稍后再试...',ToastAndroid.SHORT);
      }
    }

    );
   }else{
     //提示用户无更多历史消息
     ToastAndroid.show('已经到头了哦！',ToastAndroid.SHORT); 
   }
   //取消头部的正在加载标志
   this.setState({
    refreshing:false
   })
  }
  render() {
    // console.log('Notification in render this.state line 45:',this.state)
    return <ScrollView
            ref = {(scroll)=>{this._scroll = scroll}}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />}
              
              snapToEnd={true}
              >
      <View style={style.bgContent}>
      {
        this.state.list.map((value,index)=>{
          // console.log('scrollview',value)
          return <View key={index}> 
            <View  style={style.timestyle}>
              <Text style={style.fontstyle}>
                {global.timefilter(value.issue_data)}
              </Text>
            </View>
            <TouchableOpacity
              onPress = {()=>this.handlerPress(value)}
              style={style.msgbody}>
            <Image 
                style={style.img} 
                source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
            </Image>
            <View style={style.content}>
                <Text style={style.title}>{value.title}</Text>
                {/* <Text style={{        
                  fontSize:14,
                  color:'gray',
                  flexWrap:'nowrap',}}>{value.introduction}</Text> */}
            </View>     
            </TouchableOpacity>
          </View>
        })
      }
      </View>
    </ScrollView>

  }
}
//return (<MsgView data = {value} key={index}></MsgView>)