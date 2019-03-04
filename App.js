import Login from './App/components/Login'
import HomeScreen from './App/components/HomeScreen'
import Register from './App/components/Register'
import Add from './App/components/Add'
import NotificationDetail from './App/components/NotificationDetail'
import Notification from './App/components/Notification'

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
  Add: {
    screen: Add,
  },
  NotificationDetail:{
    screen: NotificationDetail,
  },
  Notification:{
    screen: Notification,

  }
}, {
    initialRouteName: 'Notification',
});

export default createAppContainer(AppNavigator);

