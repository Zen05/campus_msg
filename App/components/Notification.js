import React,{Component} from 'react';
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
             })
          }else{
            //提示用户网络连接错误
              Pass;
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