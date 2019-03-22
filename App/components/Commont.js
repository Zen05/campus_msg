import React,{Component} from 'react';
import { Text, View, TextInput, Button} from 'react-native';

export default class Commont extends Component{
  constructor(){
    super();
    this.state={
      aid:0
    }
  }

  componentDidMount=()=>{
    var id=this.props.navigation.getParam('cid');
    // id = this.props.navigation.getParam('Aid');
    console.log('Commont line 15 aid:',id);
    
  }

  handlePress=()=>{
    console.log('you are click me')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Title!</Text>
        <TextInput placeholder={'请输入想要说的话'}></TextInput>
        <Button title={'评论'} onPress={this.handlePress}></Button>
      </View>
    );
  }
}
