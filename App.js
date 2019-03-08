import Login from './App/components/Login'
import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'
import Notification from './App/components/Notification'
import learning from './App/learnning/learning'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },  
  learning: {
    screen: learning,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Add: {
    screen: Add,
  },
  NotificationDetail:{
    screen: NotificationDetail,
    navigationOptions:()=>{//设置标题
      return {
        headerTitle:'详情',
        headerTitleStyle:{color:'black'}
      }
    }
  },
  Notification:{
    screen: Notification,
    navigationOptions:()=>{//设置标题
      return {
        headerTitle:'通知',
        headerTitleStyle:{color:'black'}
      }
    }
  }
}, {
    initialRouteName: 'Notification',
});

export default createAppContainer(AppNavigator);

