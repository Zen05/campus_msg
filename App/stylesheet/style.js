import {StyleSheet} from 'react-native'
style = StyleSheet.create({
    msgbody:{
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        height:217, 
        width:320
    },
    img:{
        height:160, 
        width:320,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    title:{
        fontWeight:'bold',
        fontSize:16
    },
    introduction:{
        fontSize:14,
        color:'gray'
    },
    content:{
        height:57,
        backgroundColor:'#fff',
        borderBottomRightRadius:7,
        borderBottomLeftRadius:7
    },
    bar:{
        flexDirection:'row',
        justifyContent: 'space-between'

    },
    content:{
        flexDirection:'column',
        alignItems: 'center' 
    }
    
})

export default style;