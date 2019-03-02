import React,{Component} from 'react';
import {View, Text} from 'react-native';
import style from '../stylesheet/style'

export default function background(WrappedComponent){
    return class Background extends Component{
        render(){
            return (
                <View style={{flex:1, backgroundColor:'#a0a0a0'}}>

                    <View style={style.content}>
                        <WrappedComponent />
                    </View>
                </View>
            )
        }
    }
}