import React,{Component} from 'react';
import { Text, View,Image } from 'react-native';
import global from '../utility/global';
import style from '../stylesheet/style'
import background from './Background'

class MsgView extends Component{
    componentDidMount=()=>{
        console.log('notification==line8:',global.baseUrl+':'+global.port+'/img/1.jpg')
    }
    render() {
        return (
        <View style={style.msgbody}>
            <Image 
                style={style.img} 
                source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
            </Image>
            <View style={style.content}>
                <Text style={style.title}>这里是标题栏</Text>
                <Text style={style.introduction}>这里是详情页leramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleram</Text>
            </View>
        </View>
        );
    }
}

export default background(MsgView)