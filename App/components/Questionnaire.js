import React,{Component} from 'react';
import {Text,View,Button} from 'react-native'

export default class Questionnaire extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View style={{flex:1,justifyContent:'space-between'}}>
            <View style={{marginLeft:15}}>
                {/* 题目栏，用于展示题目 */}
                <View style={{marginTop:15}}>
                    <Text>题目栏</Text>
                </View>
                {/* 选项栏，用于放置选项 */}
                <View style={{marginTop:15}}>
                    <Text>选项栏</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
                <Text style={{marginLeft:15}}> {"<"} 上一题 </Text>
                <Text style={{marginRight:15}}> 下一题 {">"} </Text>
            </View>
        </View>
    }
}