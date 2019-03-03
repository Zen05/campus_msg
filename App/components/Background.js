import React,{Component} from 'react';
import {View, Text} from 'react-native';
import style from '../stylesheet/style'

export default function background(WrappedComponent){
    return class Background extends Component{
        render(){
            return (
                <View style={{flex:1, backgroundColor:'#f0f0f0'}}>

                    <View style={style.bgContent}>
                        <WrappedComponent />
                    </View>
                </View>
            )
        }
    }
}