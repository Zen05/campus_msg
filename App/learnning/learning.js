
//未加底部导航栏的
import Login from './App/components/Login'
import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'
import Notification from './App/components/Notification'
import learning from './App/components/learning'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },  
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  learning: {
    screen: learning,
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



//加入底部导航栏的
import Login from './App/components/Login'
import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'
import Notification from './App/components/Notification'
// import learning from './App/components/learning'

import { createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
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





