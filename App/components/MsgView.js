import React,{Component} from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import global from '../utility/global';
import style from '../stylesheet/style';

class MsgView extends Component{
    constructor(){
        super();
        this.state={
            List:[]
        }
    }

    
    componentWillReceiveProps=()=>{
        // console.log('receive',this.props.res.data)
        var list = this.props.res;
        this.setState({
            List:list
        })
        // var data = this.props.res;   
        console.log('receive',this.state.List)
    }
    handlerPress=()=>{
        console.log('press me')
        console.log('MsgView line15 data:',this.state.List);   
    }
    render() {
        // var props=this.props;
        // console.log(props);
        return (
                <TouchableOpacity style={[style.msgbody,style.bgContent]}>
                    <Image 
                        style={style.img} 
                        source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
                    </Image>
                    <View style={style.content}>
                        <Text style={style.title}>{this.List.title}</Text>
                        <Text style={style.introduction}>{this.List.introduction}</Text>
                    </View>     
                </TouchableOpacity>
        );
    }
}

export default MsgView
/**
 
                {
                    this.state.List.map((value,index)=>{
                        return(
                        <TouchableOpacity style={style.msgbody} onPress={this.handlerPress}>
                            <Image 
                                style={style.img} 
                                source={{uri:global.baseUrl+':'+global.port+'/img/1.jpg'}}>
                            </Image>
                            <View style={style.content}>
                                <Text style={style.title}>这里是标题栏{index}</Text>
                                <Text style={style.introduction}>这里是详情页leramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleramleram</Text>
                            </View>
                        </TouchableOpacity>
                        ) 
                })
            } 
 */