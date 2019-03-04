import React,{Component} from 'react';
import global from '../utility/global';
import {ScrollView,FlatList,TouchableOpacity,Image,View,Text} from 'react-native';
import MsgView from './MsgView';

export default class Notification extends Component{
  constructor(){
    super();
    this.state={
      recordCount:0,
      pageSize:4,
      pageCount:0,
      pno:1, 
      list:[]
    }
  }
  componentWillMount=()=>{  
    var url = `${global.baseUrl}:${global.port}/article/list?pagesize=${this.state.pageSize}&pno=${this.state.pno}` 
    console.log(url)
    fetch(url).then(
      res=>res.json()
      ).then(result=>{
          //  console.log(result);
       //对数据的返回结果进行处理
          if(result.code == 200 ){//成功时跳向指定的页面
             let resData = result.data;
            //  console.log(resData)
             this.setState({
              recordCount:resData.recordCount,
              pageSize:resData.pageSize,
              pageCount:resData.pageCount,
              pno:resData.pno, 
              list:resData.data
             })
          }else{
            //提示用户网络连接错误
              Pass;
          }
         console.log('Notifica this.state line:39:',this.state)
      }
  )
  }
//   showItem=(info)=>{
//     console.log('info',info)
//     // return <MsgView res={info}></MsgView>
//     return <TouchableOpacity style={[style.msgbody,style.bgContent]}>
//     <Image 
//         style={style.img} 
//         source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
//     </Image>
//     <View style={style.content}>
//         <Text style={style.title}>{info.item.title}</Text>
//         <Text style={style.introduction}>{info.item.introduction}</Text>
//     </View>     
// </TouchableOpacity>
//   }
  // loadMore=()=>{
  //   console.log('load more')
  // }
  render() {
    // console.log('Notification in render this.state line 45:',this.state)
    return <ScrollView>
      {
        this.state.list.map((value,index)=>{
          // console.log('scrollview',value)
          return <TouchableOpacity style={[style.msgbody,style.bgContent]} key={index}>
          <Image 
              style={style.img} 
              source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
          </Image>
          <View style={style.content}>
              <Text style={style.title}>{value.title}</Text>
              <Text style={style.introduction}>{value.introduction}</Text>
          </View>     
      </TouchableOpacity>
        })
      }
    </ScrollView>
    // <FlatList
    // data={this.state.list}
    // renderItem={this.showItem}>
    // </FlatList>
  }
}
//return (<MsgView data = {value} key={index}></MsgView>)