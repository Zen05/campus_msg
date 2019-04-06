import {StyleSheet} from 'react-native'
style = StyleSheet.create({
    fontstyle:{
        fontSize:12,
        color:'gray'
    },
    timestyle:{
        alignItems:'center'
    },
    container:{},
    msgbody:{
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        height:217, 
        width:320,
        marginTop:10,
        marginBottom:30
    },
    img:{
        height:160, 
        width:320,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
    },
    introduction:{
        fontSize:14,
        color:'gray',
        flexWrap:'nowrap'
    },
    content:{
        width:320,
        backgroundColor:'#f0f0f0',
        borderBottomRightRadius:7,
        borderBottomLeftRadius:7,
        paddingTop:10,
        paddingLeft:10,
        paddingBottom:10,
        overflow:'hidden',
        alignItems:'flex-start'
    },
    bar:{
        flexDirection:'row',
        justifyContent: 'space-between'

    },
    bgContent:{
        flex:1,
        alignItems: 'center' 
    },
    bg:{
        flex:1,
        backgroundColor:'#f5f5f5'
    }
    
})

export default style;