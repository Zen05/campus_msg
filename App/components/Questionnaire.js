import React,{Component} from 'react';
import {Text,View,Button} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import global from '../utility/global'


export default class Questionnaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            qid:1,
            title:'五一放假方案选择'
        }
    }
    onSelect=(index, value)=>{
        this.setState({
          text: `Selected index: ${index} , value: ${value}`
        })
      }
    componentDidMount=()=>{
        //var qid=this.props.navigation.getParam('aid');
        var qid = 1;
        var url = `${global.baseUrl}:${global.port}/questionnaire/detail?qid=${qid}`;
        fetch(url).then( res => res.json() ).then(result => {
            this.setState(()=>{
                return {
                    data:result
                }
            })
            console.log(this.state.data);
        })
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
                    <RadioGroup
                        onSelect = {(index, value) => this.onSelect(index, value)}
                    >
                        <RadioButton value={'item1'} >
                        <Text>This is item #1</Text>
                        </RadioButton>

                        <RadioButton value={'item2'}>
                        <Text>This is item #2</Text>
                        </RadioButton>

                        <RadioButton value={'item3'}>
                        <Text>This is item #3</Text>
                        </RadioButton>
                    </RadioGroup>
        
                   
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
                <Text style={{marginLeft:15}}> {"<"} 上一题 </Text>
                <Text style={{marginRight:15}}> 下一题 {">"} </Text>
            </View>
        </View>
    }
}