import React,{Component} from 'react'
import {Text,View,Image,TextInput,Button,ToastAndroid } from 'react-native'
import Global from '../utility/global'
// import { gray } from 'ansi-colors';

export default class Login extends Component{
   constructor(){
    super()
    //状态，设置状态，记录用户手机号和密码
    this.state={
        phone:'',
        passWord:''
    }
   }
   //函数，用于实现手机号输入框的数据双向绑定
   handleChangePhone=(msg)=>{
       this.setState({
           phone:msg
       })
   }
   //函数，实现密码框的数据双向绑定
   handleChangeUpwd=(msg)=>{
       this.setState({
           passWord:msg
       })
   }
   //函数，用于实现跳转到注册页面
   handleToRegister=()=>{
    this.props.navigation.navigate("Register")
   }
   //函数，用于跳转到注册页面
   handleToAdd=()=>{
    this.props.navigation.navigate("Add")
   }
   //函数，待添加，用于实现密码修改处的导航
   //....

   //函数，实现点击登录按钮时发送登录请求
   handlePress=()=>{
       console.log("handlePress has been called")
       //console.log("phone="+this.state.phone+"&upwd="+this.state.passWord)
       url=`${Global.baseUrl}:${Global.port}/user/login`//请求的服务器地址
       //发送post请求时的配置信息
       var config = {
           method:"POST",//发送的方法
           headers:{//头信息，发送json信息时使用
                'Content-Type':'application/x-www-form-urlencoded'
           },
           body://post方法下的数据体
           "phone="+this.state.phone+
           "&upwd="+this.state.passWord
       }
    //    console.log(config.body)
    //发送数据
       fetch(url,config).then(
           res=>res.json()
           ).then(result=>{
                console.log(result);
            //对数据的返回结果进行处理
               if(result.code == 200 ){//成功时跳向指定的页面
                   this.props.navigation.navigate("Home")
               }else{
                   this.setState({//失败时将输入框清空
                       phone:'',
                       passWord:''
                   })
                   //待加功能，弹出提示框，提示用户重新输入
                //    ToastAndroid.show("手机号或密码错误，请重新输入", ToastAndroid.SHORT)
               }
           }
       )
    }
    //视图
    render(){
        return <View>
           <Image style={{width:70,height:70,
            borderRadius:35,alignSelf:'center'}} 
            source={require("../imgs/1.jpg")}></Image>

            <TextInput placeholder="手机" 
            value={this.state.phone} 
            onChangeText={this.handleChangePhone}>
            </TextInput>

            <TextInput
            secureTextEntry={true} 
            value={this.state.passWord}
            onChangeText={this.handleChangeUpwd}
            placeholder="密码">
            </TextInput>

            <Button 
                title="登录" 
                onPress={this.handlePress}>
            </Button>
            <View style={{flexDirection:'row'}}>
            <Text style={{
                flex:1,
                fontSize:14,
                color:'gray'
            }}
            onPress={this.handleToRegister}>注册</Text>
            
            <Text style={{
                flex:1,
                textAlign:'right',
                fontSize:14,
                color:'gray'
                }}
                onPress={this.handleToRegister}>忘记密码?</Text>
            </View>
        </View> 
    }
}