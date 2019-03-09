/**
 * 用于记录一些全局的配置信息，因配置信息数量较少，暂时如此不设置方法返回
 * author：zen
 */
export default {
    baseUrl:'http://192.168.19.1',//服务器url
    port:'3000',//服务器端口
    timefilter:(time)=>{//时间转换函数，将数据库中展示的数据格式转换为年月日的格式
        var mydate = new Date(time);
        var year = mydate.getFullYear()
        var month = mydate.getMonth()+1
        var day = mydate.getDate()
        // console.log('global.js line13',year,month,day)
        return `${year}年${month}月${day}日`
    }
} 