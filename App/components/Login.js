import React,{Component} from 'react'
import {Text,View,Image,TextInput,Button} from 'react-native'
import { gray } from 'ansi-colors';

export default class Login extends Component{
   constructor(){
    super()
    this.state={
        phone:'',
        passWord:''
    }
   }
   handleChangePhone=(msg)=>{
       this.setState({
           phone:msg
       })
   }
   handleChangeUpwd=(msg)=>{
       this.setState({
           passWord:msg
       })
   }
   handleToRegister=()=>{
    this.props.navigation.navigate("Register")
   }
   handleToAdd=()=>{
    this.props.navigation.navigate("Add")
   }
   handlePress=()=>{
       //console.log("phone="+this.state.phone+"&upwd="+this.state.passWord)
       url='http://192.168.47.1:3000/user/login'
       var config = {
           method:"POST",
           headers:{
                'Content-Type':'application/x-www-form-urlencoded'
           },
           body:
           "phone="+this.state.phone+
           "&upwd="+this.state.passWord
       }
       console.log(config.body)
       fetch(url,config).then(
           res=>res.json()
           ).then(result=>{
               console.log(result);
               if(result.code == 200 ){
                   this.props.navigation.navigate("Home")
               }else{
                   this.setState({
                       phone:'',
                       passWord:''
                   })
               }
           }
       )
    }
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