import React,{Component} from 'react';
import {Text,View,Button,ScrollView} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import Global from '../utility/global'


export default class Questionnaire extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            qid:1,
            title:'',
            select:{}
        }
    }
    onSelect=(rIndex, value, gIndex, tid)=>{
        console.log(`you select ${rIndex} and result is ${value},gIndex is ${gIndex}, tid is ${tid}`)
        this.setState((prevState)=>{
            var obj = prevState.select;
            obj[tid]=value; 
            return{
                select: obj
            }
        })
    }
    handlerPress=()=>{
        url = `${Global.baseUrl}:${Global.port}/questionnaire/setResult`;
        obj = JSON.stringify(this.state.select)
        console.log('obj',obj)
        var config = {
            method:"POST",//发送的方法
            headers:{//头信息，发送json信息时使用
                 'Content-Type':'application/x-www-form-urlencoded'
            },
            body://post方法下的数据体
            'obj='+obj
        }
        fetch(url,config).then(res=>res.json()).then(result=>{
            console.log(result)
        })
        console.log('this is result of you select',this.state.select)
    }
    componentDidMount=()=>{
        var qid=this.props.navigation.getParam('qid');
        this.setState(()=>{
            return{
                qid
            }
        })
        // var qid = 1;
        var url = `${Global.baseUrl}:${Global.port}/questionnaire/detail?qid=${qid}`;
        fetch(url).then( res => res.json() ).then(result => {
            this.setState(()=>{
                return {
                    data:result
                }
            })
             console.log('this is this.state.data:',result);
        })
    }

    render(){
        return <ScrollView style={{flex:1}}>
            <View style={{marginLeft:15,justifyContent:'center'}}>
                {/* 题目栏，用于展示题目 */}

                {/* 选项栏，用于放置选项 */}
                <View style={{marginTop:15}}>                    
                    {
                        this.state.data.map((values,gIndex)=>{
                            var {A,B,C,D,E,F,G,H,I,tid} = values;
                            // var arr = [A,B,C,D,E,F,G,H,I];
                            // console.log('this is arr in arr',arr);
                            // console.log('this is value in map',values);
                            // var str = 'A';
                            // str = String.fromCharCode(str.charCodeAt() + index)
                            // console.log('this is value.c',values.C)
                            
                            return (
                            <View
                                key={values.title}
                            >
                                <View style={{marginTop:15}}>
                                    <Text>{`${gIndex+1}.${values.title}`}</Text>
                                </View>
                                <RadioGroup
                                    gIndex={gIndex}
                                    tid = {tid}
                                    onSelect={(rIndex, value, gIndex, tid) => this.onSelect(rIndex, value, gIndex, tid)}>
                                   
                                    <RadioButton value={`A`}>
                                        <Text>{`A.${A}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`B`}>
                                        <Text>{`B.${B}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`C`} style={{display: C ? "flex" : "none"}}>
                                        <Text>{`C. ${C}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`D`} style={{display: D ? "flex" : "none"}}>
                                        <Text>{`D. ${D}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`E`} style={{display: E ? "flex" : "none"}}>
                                        <Text>{`E. ${E}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`F`} style={{display: F ? "flex" : "none"}}>
                                        <Text>{`F. ${F}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`G`} style={{display: G ? "flex" : "none"}}>
                                        <Text>{`G. ${G}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`H`} style={{display: H ? "flex" : "none"}}>
                                        <Text>{`H. ${H}`}</Text>
                                    </RadioButton>

                                    <RadioButton value={`I`} style={{display: I ? "flex" : "none"}}>
                                        <Text>{`I. ${I}`}</Text>
                                    </RadioButton>
                                </RadioGroup>
                            </View>)
                        })
                    }  
                </View>
            </View>
            <Button title={'提交'} onPress={this.handlerPress}></Button>

        </ScrollView>
    }
}
//5
//477115276
