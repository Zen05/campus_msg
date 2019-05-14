import React,{Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class SettingsScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor:'#f2f2f2'}}>
          <View style={{width:'100%'}}>
          {/* 头像及基本信息 */}
            <View style={{
              flexDirection:"row", 
              backgroundColor:'white', 
              justifyContent: 'space-between', 
              alignItems: 'stretch',
              height:50,
              padding:8,
              marginBottom:8
              }}>
              <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
                <Text>修改资料</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
                <Text style={{fontSize:20}}>></Text>
              </View>
            </View>

            {/* 关于 */}
            <View style={{
              flexDirection:"row", 
              backgroundColor:'white', 
              justifyContent: 'space-between', 
              alignItems: 'stretch',
              height:50,padding:8,
              marginBottom:8
              }}>
              <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
                <Text>关于</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'stretch'}}>
                <Text style={{fontSize:20}}>></Text>
              </View>
            </View>

          </View>
         {/* 设置 */}
          <View style={{width:'100%',}}>
            <Button title = {'退出登录'} onPress={this.handleLogout}></Button>
          </View>
        </View>
      );
    }
    handleLogout = ()=>{
      this.props.navigation.navigate('Login')
    }
  }