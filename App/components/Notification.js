import React,{Component} from 'react';
import { View } from 'react-native';
import global from '../utility/global';
import MsgView from './MsgView'

export default class Notification extends Component{
  constructor(){
    super();
    this.status={
      recordCount:0,
      pageSize:9,
      pageCount:0,
      pno:1, 
      data:[]
    }
  }
  componentDidMount=()=>{  
    var url = `${global.baseUrl}:${global.port}/article/list?pagesize=${this.status.pageSize}&pno=${this.status.pno}` 
    // console.log(url)
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
              data:resData.data
             },console.log(this.state))
          }else{
              this.setState({//失败时将输入框清空

              })
              //待加功能，弹出提示框，提示用户重新输入
           //    ToastAndroid.show("手机号或密码错误，请重新输入", ToastAndroid.SHORT)
          }
      }
  )
  }

  render() {
    return (
      
        <MsgView></MsgView>
      
    );
  }
}