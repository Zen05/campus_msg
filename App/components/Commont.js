import React,{Component} from 'react';
import { Text, View, TextInput, Button, ToastAndroid} from 'react-native';
import global from "../utility/global";

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class Commont extends Component{
  constructor(){
    super();
    this.state={
      aid:0,
      text:'',
      user_name:'',
      title:''
    }
  }

  componentDidMount=()=>{
    var id=this.props.navigation.getParam('aid');
    var title = this.props.navigation.getParam('title');
    var user_name = this.props.navigation.getParam('userName')
    // id = this.props.navigation.getParam('Aid');
    this.setState({
      aid:id,
      title:title,
      user_name:user_name
    })
    console.log('Commont line 15 aid:',id);
    
  }

  handlePress=()=>{
    console.log('you are click me')
    console.log(this.state.text)
    var url = global.baseUrl + ':' + global.port + '/article/commont'
    var config = {
      method:"POST",//发送的方法
      headers:{//头信息，发送json信息时使用
           'Content-Type':'application/x-www-form-urlencoded'
      },
      body://post方法下的数据体
      "aid="+this.state.aid+
      "&user_name="+this.state.user_name + 
      "&text=" + this.state.text 
  }
    fetch(url,config).then(res => res.json()).then(
      result => {
        console.log(result);
        if(result.code == 200){
          ToastAndroid.show('评论成功！',ToastAndroid.SHORT);
          this.props.navigation.navigate("NotificationDetail")
        }else{
          ToastAndroid.show('网络开小差了，请稍后再试哦！',ToastAndroid.SHORT);
        }
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style={{fontSize:14,color:'#484848',marginTop:12,marginBottom:12}}>{this.state.title}</Text>
        <View style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          marginBottom:5 }}>
          <UselessTextInput 
            placeholder={'请输入想要说的话'} 
            style={{borderWidth:1,height:80}}
            multiline = {true}
            numberOfLines = {4}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
        </View>
        <Button title={'评论'} 
          onPress={this.handlePress}></Button>
      </View>
    );
  }
}
