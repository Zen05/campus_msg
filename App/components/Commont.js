import React,{Component} from 'react';
import { Text, View, TextInput, Button} from 'react-native';
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
      user_name:'zz'
    }
  }

  componentDidMount=()=>{
    var id=this.props.navigation.getParam('aid');
    // id = this.props.navigation.getParam('Aid');
    this.setState({
      aid:id
    })
    console.log('Commont line 15 aid:',id);
    
  }

  handlePress=()=>{
    console.log('you are click me')
    console.log(this.state.text)
    var url = global.baseUrl + ':' + global.port + '/detail/commont'
    fetch(url).then(res => res.json()).then(
      result => {
        if(result.code == 200 ){
          pass;
        }else{
          pass;
        }
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style={{fontSize:14,color:'#484848',marginTop:12,marginBottom:12}}>Title!</Text>
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
