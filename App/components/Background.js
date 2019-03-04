import React,{Component} from 'react';
import {View, } from 'react-native';
import style from '../stylesheet/style'


export default function background(WrappedComponent){
    return class Background extends Component{
        render(){
            return (
                <View style={style.bg}>
                    <View style={style.bgContent}>
                        <WrappedComponent {...this.props}/>
                    </View>
                </View>
            )
        }
    }
}